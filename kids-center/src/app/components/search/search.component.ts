import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
     form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
    
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
  submit(): void {
    console.log(this.form.getRawValue());
    this.http.get('http://localhost:8000/user', this.form.getRawValue())
    .subscribe({
      next:Response => console.log("user added", Response),
      error:error   => console.log("error", error)
    });
  }
  
//   add():void {
//     this.http.post('http://localhost:8000/user', this.form.getRawValue())
// .subscribe({
//   next:Response => console.log("Al right", Response),
//   error:error   => console.log("error", error)
// });
//   }
}
