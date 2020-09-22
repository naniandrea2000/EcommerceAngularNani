import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { getProdotti } from 'src/app/redux/carrello';
import { Observable, Subscription } from 'rxjs';
import { initCarrello } from 'src/app/redux/carrello/carrello.action';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  prosegui:number;
  prodotti: Prodotto[]=[];

  subscription=new Subscription();

  constructor(private store: Store) { }

  get prodottoItem(): Observable<Prodotto[]> {    return this.store.pipe(      
        select(getProdotti)); 
    }


  ngOnInit(): void {
    this.prosegui=0;
    this.prodottoItem.forEach(prodotti => {
      this.prodotti=prodotti;
    });
    console.log(this.prodotti);
  }

  next(){
    this.prosegui+=1;
  }
  back(){
    this.prosegui-=1;
  }

  rimuoviProdotto(id:number){
    var copy=Array.from(this.prodotti);
    const index=copy.findIndex(x=> x.id=== id);
    copy.splice(index,1);
    this.prodotti=copy;
    this.updateCarrello(this.prodotti);
  }


  updateCarrello(carrello: Prodotto[]){
    this.store.dispatch(initCarrello({carrello}));
  }

}
