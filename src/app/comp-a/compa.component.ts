import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrl: './compa.component.css'
})
export class CompaComponent {
public dataFromA="This is the component A";
public dataFromB:any;

constructor(private api:ApiService){}
}
