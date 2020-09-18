import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { selectProdotti } from 'src/app/redux/prodotti';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: number;

  constructor(private store: Store, private router: Router) {
    this.id=1;
  }

  get prodotti(): Observable<Prodotto[]> {
    return this.store.pipe(select(selectProdotti));
  }

  personalizza(){
    this.router.navigate(['/personalizza', this.id-1]);
  }

  ngOnInit(): void {}

}
