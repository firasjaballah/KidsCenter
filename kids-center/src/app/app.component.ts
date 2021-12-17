import { Component  } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    
    this.user = this.shared.getuser();
    console.log('USER',this.user);
    
  }
  
  
}
