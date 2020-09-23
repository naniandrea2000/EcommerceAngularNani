import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { getProdotti } from 'src/app/redux/carrello';
import { Observable, Subscription } from 'rxjs';
import { initCarrello } from 'src/app/redux/carrello/carrello.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpComunicationsService } from 'src/app/core/http-comunications/http-comunications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  prosegui:number;
  prodotti: Prodotto[]=[];
  pagaForm:FormGroup;
  userForm:FormGroup;

  totale:number = 0;
  indirizzo:string;
  nome:string;
  cognome:string;
  cliente:string;
  spedizione:number=2;

  subscription=new Subscription();

  constructor(private store: Store,private fb:FormBuilder,private http: HttpComunicationsService,private router:Router) { }

  get prodottoItem(): Observable<Prodotto[]> {    return this.store.pipe(      
        select(getProdotti)); 
  }

  ngOnInit(): void {
    this.prosegui=0;
    this.prodottoItem.forEach(prodotti => {
      this.prodotti=prodotti;
    });
    console.log(this.prodotti);
    this.calcolaTotale();
    
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      cellulare: ['', Validators.required],
      citta: ['', Validators.required],
      cap: ['', Validators.required],
      indirizzo: ['', Validators.required],
      numero: ['', Validators.required],
      informazioni: ['', Validators.required],
      
    })

    this.pagaForm=this.fb.group({
      method: ['',Validators.required],
      type: ['',Validators.required],
      number: ['',Validators.required],
      cvv: ['',Validators.compose([Validators.required,Validators.minLength(3)])],
    })
    
  }

  next(){
    this.prosegui+=1;
  }
  back(){
    this.prosegui-=1;
  }

  salvaInfo(){
    this.indirizzo=this.userForm.get("indirizzo").value+" "+this.userForm.get("numero").value;
    this.cliente= this.userForm.get("nome").value+" "+this.userForm.get("cognome").value;
   }

  calcolaTotale(){
    this.prodotti.forEach(prodotto => {
      console.log(this.totale);
      console.log(prodotto.prezzo);
      this.totale+=prodotto.prezzo;
    });
  }

  rimuoviProdotto(id:number, prezzo:number){
    var copy=Array.from(this.prodotti);
    const index=copy.findIndex(x=> x.id=== id);
    copy.splice(index,1);
    this.prodotti=copy;
    this.updateCarrello(this.prodotti);
    this.totale-=prezzo;
  }

  updateCarrello(carrello: Prodotto[]){
    this.store.dispatch(initCarrello({carrello}));
  }

  inviaMail(){
    let msg:string="Hai effettuato un acquisto su nani.it\nPrezzo: "+this.totale+"\n";
    msg+="Prodotti: "
    this.prodotti.forEach(prodotto => {
      msg+=prodotto.nome+" "+prodotto.colore+" "+prodotto.prezzo+"\n";
    });
    msg+="Ordine:\n"
    msg+=this.indirizzo+" "+this.userForm.get("citta").value;
    const email = this.pagaForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.sendMail('https://formspree.io/xgepekey',
        { name: this.cliente, replyto: 'andreanani1400@gmail.com', message: msg},
        { 'headers': headers }).subscribe(
          response => {
            console.log(response+" risposta");
          }
        );
        window.alert("Acquisto effettuato")
    //this.router.navigateByUrl("/home");
    this.next();
  }


  acquistoEffettuato(){
    let carrello: Prodotto[] = [];
    this.store.dispatch(initCarrello({carrello}));
  }

}
