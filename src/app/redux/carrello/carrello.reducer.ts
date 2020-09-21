import { createReducer, on } from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import {  aggiungiProdottoCarrello, initCarrello, rimuoviProdotto } from './carrello.action';

export interface CarrelloState{
    carrello: Prodotto[];
}

export const initialState: CarrelloState = {
    carrello: []
}

//gestisce transazioni State (da vecchio a nuovo stato)
export const carrelloReducer = createReducer(
    initialState,
    on(initCarrello, (state, {cart}) => ({...state, cart})),
    on(aggiungiProdottoCarrello, (state, {prodotto}) => ({ ...state, cart: [...state.carrello, prodotto] })),
    on(rimuoviProdotto, (state, {id}) => ({ ...state, cart: state.carrello.filter(item => item.id !== id) })),
)