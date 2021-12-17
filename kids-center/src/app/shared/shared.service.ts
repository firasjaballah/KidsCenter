import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user:any
  constructor() { }
  setuser(data:any){
    this.user=data
  }
  getuser(){
    return this.user
  }
}
