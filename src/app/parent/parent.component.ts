import { Component, ViewChild } from '@angular/core';
import { OuterComponent } from '../outer/outer.component';
import { log } from 'console';
 
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  public parentData:any;
  public chilData:any;
  public parentData2:any="This is the outer data"
  @ViewChild(OuterComponent)childComp:any;

  constructor(){
    this.parentData="This is the parent data"
    console.log(this.chilData);
    
  }
  ngOnInit(){
    console.log(this.chilData);
    
  }
  ngAfterViewInit(){

    console.log(this.childComp);
    console.log(this.childComp.outerData);
    console.log(this.chilData.getAllMarksDetails());
    
    
    
  }




  onFetchDataFromChild(evt:any){
    console.log(evt);
    this.chilData=evt;
    
  }
 }
