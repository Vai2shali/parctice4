import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrl: './outer.component.css'
})
export class OuterComponent {
  public outerData:any;
 @Input() dataFromChild2:any;
 getAllMarksDetails(){
  return this.outerData
 }

}
