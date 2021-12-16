import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultService implements OnInit {
  constructor(private http: HttpClient,
              
    ) { 
 
  }

  ngOnInit(): void {
   
    

  }
  fetchData(){
     
  }

}
