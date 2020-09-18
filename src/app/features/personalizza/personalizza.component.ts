import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { getProdottoById } from 'src/app/redux/prodotti';


@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  @Input()
  prodotto: Prodotto;

  @Output()
  formSubmitEvent: EventEmitter<Prodotto> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Prodotto> = new EventEmitter();

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.subscription.add(this.route.params.pipe(
      filter(params => params != null && params['id'] != null),
      switchMap(params => this.store.pipe(select(getProdottoById, { id: Number(params['id']) }))),
    ).subscribe(prodotto => {
      this.prodotto = prodotto;
      console.log(this.prodotto)
    }));
  }

  /*editForm(cartItem: CartItem) {
    this.store.dispatch(addItemToCart({cartItem}));
    this.clothes = cartItem;
  }*/

  undo() {
    this.prodotto = this.prodotto;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
