import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { getProdotti } from 'src/app/redux/carrello';
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
  colore: string;
   //prodottoCarrello: Prodotto = {
    //  id:0,
    //  img1: "",
    //  img2:"",
    //  nome: "",
    //  colore:"",
    //  testo:"",
    //  bordi:"",
  // };

  prodottoForm: FormGroup;

  get prodottoItem(): Observable<Prodotto[]> {    return this.store.pipe(      
    select(getProdotti)); 
}

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
      if(this.prodotto!=null){
        this.prodottoForm = this.fb.group({
          id:prodotto.id,
          colore: [prodotto.colore,Validators.required],
          testo: [prodotto.testo,Validators.required],
          bordi: [prodotto.bordi,Validators.required],
        });
        console.log(this.prodotto);
      }
      console.log(this.prodotto)  
    }));
    this.colore=this.prodotto.colore;
  }

  aggiungiAlCarrello(prodotto: Prodotto){
    prodotto.id=this.prodotto.id;
    prodotto.nome=this.prodotto.nome;
    prodotto.img1=this.prodotto.img1;
    prodotto.img2=this.prodotto.img2;
    prodotto.prezzo=this.prodotto.prezzo;
    // prodottoCarrello.colore=this.prodottoForm.get('colore').value;
    // prodottoCarrello.testo=this.prodottoForm.get('testo').value;
    // prodottoCarrello.bordi=this.prodottoForm.get('bordi').value;
    console.log(prodotto);
    this.store.dispatch(aggiungiProdottoCarrello({prodotto}));
    window.alert("Prodotto aggiunto con SUCCESSO")
    this.router.navigateByUrl("/home");
  }

  ripristina(){
    this.prodottoForm.reset();
    this.ngOnInit();
  }

  cambioColore(colore:string){
    console.log(colore);
    this.colore=colore;
  }
}
