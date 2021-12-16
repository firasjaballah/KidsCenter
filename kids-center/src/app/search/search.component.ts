import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
     form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      city:"",
      fullName:"",
      specialty:""
    })
  }
  onChange(event:any){
    console.log("hi");
  
  }
  submit():void{
    console.log(this.form.getRawValue());
    
  }
}
