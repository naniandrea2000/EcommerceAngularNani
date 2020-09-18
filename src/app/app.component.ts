import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllUsers } from './redux/login/loginRegister.action';
import { retrieveAllProdotti } from './redux/prodotti/prodotti.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcommerceAngularNani';

  constructor(private store: Store) {}

  ngOnInit(): void {    
    this.store.dispatch(retrieveAllUsers());    
    this.store.dispatch(retrieveAllProdotti());  
  }
}
