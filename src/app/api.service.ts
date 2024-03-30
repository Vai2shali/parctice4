import { Injectable } from '@angular/core';
 import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentMessage: any;
public message= new BehaviorSubject("This is the defult service");
// currentMessage=this.message.asObservable();

  constructor() { 
console.log(this.message);

  }
}
  