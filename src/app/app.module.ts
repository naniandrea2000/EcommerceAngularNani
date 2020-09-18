import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './redux';
import { UsersEffect } from './redux/login/loginRegister.effects';
import { ProdottiEffects } from './redux/prodotti/prodotti.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UsersEffect,ProdottiEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
