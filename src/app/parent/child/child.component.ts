import { Component, EventEmitter, Input, Output } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()dataFromChild:any;
  @Output()dataEvent= new EventEmitter <any> ();
  public dataFrom:any="This is angular comp";


  sendDataFromParent(){
console.log("Hii chhagan");
this.dataEvent.emit(this.dataFrom)

  }
   
 }
