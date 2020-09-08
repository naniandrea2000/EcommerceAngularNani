import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrelloRoutingModule } from './carrello-routing.module';
import { CarrelloComponent } from './carrello.component';


@NgModule({
  declarations: [CarrelloComponent],
  imports: [
    CommonModule,
    CarrelloRoutingModule
  ]
})
export class CarrelloModule { }
