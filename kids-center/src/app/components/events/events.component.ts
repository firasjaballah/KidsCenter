import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  state=''
  onfilter(selectedValue:HTMLSelectElement){
    this.state=selectedValue.value
  }

}
