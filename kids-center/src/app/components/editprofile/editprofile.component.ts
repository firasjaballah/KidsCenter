import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  form  : FormGroup;
  constructor(
    private formEditprofile: FormBuilder,
    private http      : HttpClient,
    private route     : Router
  ) { }

  ngOnInit(): void {
    this.form = this.formEditprofile.group({
      FullName:"",
      title:"",
      description:"",
      Age:"50",
      email:"",
      adresse:"ariana.tunis",
      city :"ariana",
      phone:"",
      user_img:"",
      experience:""  
    })
  }
  submit(): void {
    // console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/editprofile', this.form.getRawValue())
    .subscribe({
      next:Response => {
        console.log("Al right", Response);
        this.route.navigateByUrl('editprofile');
      },
      error:error   => console.log("error", error)
    });
    
  }
    

}
