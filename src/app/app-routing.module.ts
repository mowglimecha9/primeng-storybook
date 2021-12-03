import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccordionModule,

    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
