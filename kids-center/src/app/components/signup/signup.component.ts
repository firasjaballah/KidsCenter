import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
    
  }

}
