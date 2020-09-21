import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { aggiungiProdottoCarrello } from 'src/app/redux/carrello/carrello.action';
import { getProdottoById } from 'src/app/redux/prodotti';


@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  prodotto: Prodotto;
  // prodottoCarrello: Prodotto = {
  //   id:0,
  //   img1: "",
  //   img2:"",
  //   nome: "",
  //   colore:"",
  //   testo:"",
  //   bordi:"",
  // };

  prodottoForm: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store, private fb: FormBuilder, private router: Router) { 
    this.prodottoForm = this.fb.group({
      id:'',
      colore: ['',Validators.required],
      testo: ['',Validators.required],
      bordi: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription.add(this.route.params.pipe(
      filter(params => params != null && params['id'] != null),
      switchMap(params => this.store.pipe(select(getProdottoById, { id: Number(params['id']) }))),
    ).subscribe(prodotto => {
      this.prodotto = prodotto;
      console.log(this.prodotto)
    }));
    
  }

  aggiungiAlCarrello(prodotto: Prodotto){
    prodotto.id=this.prodotto.id;
    prodotto.nome=this.prodotto.nome;
    // prodottoCarrello.colore=this.prodottoForm.get('colore').value;
    // prodottoCarrello.testo=this.prodottoForm.get('testo').value;
    // prodottoCarrello.bordi=this.prodottoForm.get('bordi').value;
    console.log(prodotto);
    this.store.dispatch(aggiungiProdottoCarrello({prodotto}));
  }

  ripristina(){
    this.prodottoForm.reset();
  }
}
