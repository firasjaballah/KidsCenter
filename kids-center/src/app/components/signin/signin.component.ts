import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form  : FormGroup;
  result: Object;
  
  constructor(
    private formSignIn: FormBuilder,
    private http      : HttpClient,
    private shared    : SharedService,
    private route     : Router 
  ) { }
    
  ngOnInit(): void {
    this.form = this.formSignIn.group({
      username : '',
      password : ''
    })
    
  }
  
 
  submit(): void {
    // console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/auth/signin', this.form.getRawValue())
      .subscribe({
        next: Response => {
          console.log(Response);
          this.result = Response;
          this.shared.setuser(this.result);
          this.route.navigateByUrl('/');

        },
        error: error   => console.log("error", error)
      });

  }
  

}
