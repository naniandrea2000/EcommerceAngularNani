import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizzaRoutingModule } from './personalizza-routing.module';
import { PersonalizzaComponent } from './personalizza.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PersonalizzaComponent],
  imports: [
    CommonModule,
    PersonalizzaRoutingModule,
    SharedModule
  ]
})
export class PersonalizzaModule { }
