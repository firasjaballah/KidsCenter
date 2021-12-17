import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



=======
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> 263c3ae3f2f7b4ec9900488bb9e2ca736f8de28e
@Component({
  selector   : 'search',
  templateUrl: './search.component.html',
  styleUrls  : ['./search.component.css']
})
export class SearchComponent implements OnInit {
<<<<<<< HEAD
     form:FormGroup;
     serviceProviders:Array<Object>;
     result:any;
    
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
    
   }
 
   
=======
  form  : FormGroup;
  users : Array<Object>;
  data  : Object;
  result: Object;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
  }
>>>>>>> 263c3ae3f2f7b4ec9900488bb9e2ca736f8de28e
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      city: "",
      fullName: "",
      specialty: ""
    })
  }
<<<<<<< HEAD
 
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
=======
  onChange(event: any) {
    console.log("hi");
  }
  submit(): void {
    console.log(this.form.getRawValue());
    this.data = this.form.getRawValue();
    this.http.get('http://localhost:8000/user', this.form.getRawValue())
      .subscribe({
        next: Response => {
          console.log("user added", Response);
          this.users = [Response];
        },
        error: error => console.log("error", error)
      });
  }
  myfilter(data: Object, y:Array<Object>): void {
    var myArr: Array<Object>;
    // var data = this.form.getRawValue();
    // var y    = this.users;
    // console.log("myArr : ", data);
    // console.log("y : ",y);
    
    // { city: 'Médenine', fullName: 'firas', specialty: 'English' }

    myArr = y.filter(ele => {
      // if ((data.fullName !== "") && (data.city !== "") && (data.specialty !== "")) {
      //   if ((data.specialty === ele.specialty) && (ele.full.toUpperCase().indexOf(data.fullName.toUpperCase()) !== -1) && (data.city === ele.city))
      //     return ele
      // }
      // else if ((data.fullName !== "") && (data.city !== "")) {
      //   if ((ele.full.toUpperCase().indexOf(data.fullName.toUpperCase()) !== -1) && (data.city === ele.city))
      //     return ele
      // }
      // else if ((data.fullName !== "") && (data.specialty !== "")) {
      //   if ((data.specialty === ele.specialty) && (ele.full.toUpperCase().indexOf(data.fullName.toUpperCase()) !== -1))
      //     return ele
      // }
      // else if ((data.city !== "") && (data.specialty !== "")) {
      //   if ((data.specialty === ele.specialty) && (data.city === ele.city))
      //     return ele
      // }
      // else if (data.specialty !== "") {
      //   if (data.specialty === ele.specialty)
      //     return ele
      // }
      // else if (data.city !== "") {
      //   if (data.city === ele.city)
      //     return ele
      // }
      // else if (data.fullName !== "") {
      //   if (ele.full.toUpperCase().indexOf(data.fullName.toUpperCase()) !== -1)
      //     return ele
      // }
      // else {
      //   return ele
      // }
      return ele;
    })//closing tag of filter
    console.log("filter : ", data);
    console.log("y : ", y);
    console.log("search result : ", myArr);
>>>>>>> 263c3ae3f2f7b4ec9900488bb9e2ca736f8de28e
  }
}