import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { OuterComponent } from './outer/outer.component';
import { CompaComponent } from './comp-a/compa.component';
import { CompBComponent } from './comp-b/comp-b.component';

const routes: Routes = [
  {path:"",component:DatabindingComponent},
  {path:"directive" ,component:DirectiveComponent},
  {path:"parent" ,component:ParentComponent},
  {path:"outer" ,component:OuterComponent},
  {path:"comp-a" ,component:CompaComponent},
  {path:"comp-b" ,component:CompBComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
