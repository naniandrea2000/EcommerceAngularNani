import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  prosegui:number;

  constructor() { }

  ngOnInit(): void {
    this.prosegui=0;
  }

  prosegui1(){
    this.prosegui++;
    console.log(this.prosegui)
  }

}
