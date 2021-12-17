import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector   : 'search',
  templateUrl: './search.component.html',
  styleUrls  : ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form  : FormGroup;
  users : Array<Object>;
  data  : Object;
  result: Object;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      city: "",
      fullName: "",
      specialty: ""
    })
  }
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
  }
}