import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
     form:FormGroup;
     serviceProviders:Array<Object>;
     result:any;
    
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
 
  submit(): void {
    console.log(this.form.getRawValue());
    let params = this.form.getRawValue()
    // let params = new HttpParams().set("paramName",this.form.city).set("paramName2", paramValue2);
    this.http.get('http://localhost:8000/services', {params})
    .subscribe({
      next:Response => {
        console.log("response",Response);
        this.result=Response
        console.log("result",this.result);
    },
      error:error   => console.log("error", error)
    });
  }

// filter(data:Array<Object>) {
//   if (!data) return;
//   return data.filter((user:any) => (user.fullName,
//     user.city, user.specialty
//     && user.fullName.toLowerCase().indexOf(data.toLowerCase()) !== -1))
// }


//   myfilter(data:any):void {
//     var myArr:any[]
//    var y=this.form
//     myArr=(y.filter(ele=>{
//       if((data.fullName!=="")&&(data.city!=="")&&(data.specialty!=="")){
      
//         if((data.specialty===ele.specialty)&&(ele.fullName.toUpperCase().indexOf(data.fullName.toUpperCase())!==-1)&&(data.city===ele.city))
//         return ele
//       }
//       else if((data.fullName!=="")&&(data.city!=="")){
//         if((ele.fullName.toUpperCase().indexOf(data.fullName.toUpperCase())!==-1)&&(data.city===ele.city))
//         return ele
//       }
//       else if((data.fullName!=="")&&(data.specialty!=="")){
//         if((data.specialty===ele.specialty)&&(ele.fullName.toUpperCase().indexOf(data.fullName.toUpperCase())!==-1))
//         return ele
//       }
//       else if((data.city!=="")&&(data.specialty!=="")){
//         if((data.specialty===ele.specialty)&&(data.city===ele.city))
//         return ele
//       }
//       else if(data.specialty!==""){
//         if(data.specialty===ele.specialty)
//         return ele
//       }
//       else if(data.city!==""){
//         if(data.city===ele.city)
//         return ele
//       }
//       else if(data.fullName!==""){
//         if(ele.fullName.toUpperCase().indexOf(data.fullName.toUpperCase())!==-1)
//         return ele
//       }
//       else{
//       return ele
//           }})
//       this.form.result=myArr
//         this.form({
//           users:myArr
//         }))
// }
  add():void {
    this.http.post('http://localhost:8000/services', this.form.getRawValue())
.subscribe({
  next:Response => console.log("Al right", Response),
  error:error   => console.log("error", error)
});
  }
}
