import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrelloRoutingModule } from './carrello-routing.module';
import { CarrelloComponent } from './carrello.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CarrelloComponent],
  imports: [
    CommonModule,
    CarrelloRoutingModule,
    SharedModule
  ]
})
export class CarrelloModule { }
