import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  form  : FormGroup;
  

  constructor(private formAdd: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formAdd.group({
      eventBy: '',
    location: '',
    city: '', 
    contact: '',
    date:'',
    event_img:"https://media.istockphoto.com/photos/group-of-kids-party-event-festive-celebration-picture-id699706592?b=1&k=20&m=699706592&s=170667a&w=0&h=90X9tlV_hX1io7mSj512hPEA99p6idmGn06pI2q0vo0=",
    likes:0
    })
  }
  submit(){
    var x=this.form.getRawValue()
    console.log(x)

  }
myGroup(){}
}
