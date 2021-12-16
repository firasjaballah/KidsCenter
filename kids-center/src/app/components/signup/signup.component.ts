import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { url } from 'inspector';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: '',
      fullName: '',
      email   : '',
      password: '',
      address : '',
      city    : ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/user', this.form.getRawValue())
    .subscribe({
      next:Response => console.log("Al right", Response),
      error:error   => console.log("error", error)
    });
    // this.http.get('localhost:8000/user')
    //   .subscribe(next => console.log("user added ..."));
    
  }
    
}
