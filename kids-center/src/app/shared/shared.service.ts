import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user:any
  
  constructor(private http:HttpClient) { }
  setuser(data:any){
    this.user=data
  }
  getuser(){
    return this.user
  }
  // getevents(): Observable<Events[]>{
  //   return this.http.get <Events[]>()
  // }
    
  
}
