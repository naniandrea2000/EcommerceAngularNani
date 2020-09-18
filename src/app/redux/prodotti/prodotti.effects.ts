import { Injectable } from '@angular/core';
import { HttpComunicationsService } from 'src/app/core/http-comunications/http-comunications.service';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { retrieveAllProdotti,initProdotti } from './prodotti.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {switchMap, map, catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProdottiEffects{
    
    retrieveAllProdotti$ = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllProdotti),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Prodotto[]>('prodotti').pipe(
            tap(prodotti => console.log(prodotti)),
            map((prodotti) => initProdotti({prodotti}))
        ))
    ));

    constructor(private actions$: Actions, private httpCommunicationsService: HttpComunicationsService) {}
    
}