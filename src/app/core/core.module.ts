import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComunicationsService } from './http-comunications/http-comunications.service';
import { HttpClientModule } from '@angular/common/http';
import {RegisterService} from './services/register.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpComunicationsService,RegisterService],
})
export class CoreModule { }