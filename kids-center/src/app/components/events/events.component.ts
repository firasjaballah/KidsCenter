import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  posts:any
  user:any
  constructor(private shared :SharedService ,
    private http :HttpClient,
    private route :Router) { }

  ngOnInit(): void {
    
    this.user=this.shared.getuser()
    console.log(this.user)
    this.posts=this.http.get<[]>('/events')
    console.log(this.posts)
  }
  addPost(){
    this.route.navigateByUrl('/addEvent');
    // this.http.get<[]>('/events')
  }
  
  states:string[]=[
    "Tunis","Ariana","Ben arous","Manouba","Sousse","Sfax","Gabes",
  "Médenine","Mahdia","Béja","Bizerte","Gafsa","Jendouba","Kairouan","Kasserine","Kef",
  "Monastir","Nabeul","Sidi Bouzid","Siliana","Tataouine","Tozeur","Zaghouan","Kébili"
  ]


  events=[
    {
      title:'food party',
      image:'https://www.threehillssportspark.co.uk/wp-content/uploads/2019/01/kids-party.png',
      date:'01/01/2022 at 06 pm',
      location:'Kids Event House',
      fee:'30$ per child',
      Description:'A party for kids where they can play and enjoy foods and make new freinds',
      contact:'99 999 999'
    },
    {
      title:'food party',
      image:'https://www.threehillssportspark.co.uk/wp-content/uploads/2019/01/kids-party.png',
      date:'01/01/2022 at 06 pm',
      location:'Kids Event House',
      fee:'30$ per child',
      Description:'A party for kids where they can play and enjoy foods and make new freinds',
      contact:'99 999 999'
    },{
      title:'food party',
      image:'https://www.threehillssportspark.co.uk/wp-content/uploads/2019/01/kids-party.png',
      date:'01/01/2022 at 06 pm',
      location:'Kids Event House',
      fee:'30$ per child',
      Description:'A party for kids where they can play and enjoy foods and make new freinds',
      contact:'99 999 999'
    },{
      title:'food party',
      image:'https://www.threehillssportspark.co.uk/wp-content/uploads/2019/01/kids-party.png',
      date:'01/01/2022 at 06 pm',
      location:'Kids Event House',
      fee:'30$ per child',
      Description:'A party for kids where they can play and enjoy foods and make new freinds',
      contact:'99 999 999'
    },{
      title:'food party',
      image:'https://www.threehillssportspark.co.uk/wp-content/uploads/2019/01/kids-party.png',
      date:'01/01/2022 at 06 pm',
      location:'Kids Event House',
      fee:'30$ per child',
      description:'A party for kids where they can play and enjoy foods and make new freinds',
      contact:'99 999 999'
    }
  ]
  
  selectedValue:string
  selectedstate:string
  
  onfilter(){
    console.log(this.user)
    this.selectedstate=this.selectedValue
  }

}
