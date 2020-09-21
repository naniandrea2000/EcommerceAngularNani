import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { getProdotti } from 'src/app/redux/carrello';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  prosegui:number;
  //prodotti: Prodotto[];

  subscription=new Subscription();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.prosegui=0;
  }

  next(){
    this.prosegui+=1;
    console.log(this.prosegui)
  }
  back(){
    this.prosegui-=1;
    console.log(this.prosegui)
  }

}
