import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizzaRoutingModule } from './personalizza-routing.module';
import { PersonalizzaComponent } from './personalizza.component';


@NgModule({
  declarations: [PersonalizzaComponent],
  imports: [
    CommonModule,
    PersonalizzaRoutingModule
  ]
})
export class PersonalizzaModule { }
