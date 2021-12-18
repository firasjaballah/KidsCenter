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
      Age:"",
      email:"",
      adresse:"",
      city :"",
      phone:"",
      user_img:"",
      experience:""  
    })
  }
  submit(): void {
    this.http.post('http://localhost:8000/profile/_Id/', this.form.getRawValue())
    .subscribe({
      next:Response => {
        console.log("Edited", Response);
        this.route.navigateByUrl('/profile/:userId');
      },
      error:error   => console.log("error", error)
    });
    
  }
    

}
