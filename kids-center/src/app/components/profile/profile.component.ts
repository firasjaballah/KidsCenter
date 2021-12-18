import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    // mydata:any="data"
 FullName:string ="sahar";
 title:string="fullstack developper";
 description:string="services for customers of all sizes";
 Age:string="50";
 email:string="sahar@gmail.com";
 adresse:string="ariana.tunis";
 city :string="ariana"
 phone:string="254682"
 user_img:""
 experience:string="10"
  constructor(private http:HttpClient) { }
  // getprofile(){
  //   return this.http.get()
  // }
  ngOnInit(): void {

    
  }

}
