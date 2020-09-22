import { createReducer, on } from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { aggiungiProdottoCarrello, initCarrello, rimuoviProdotto, updateCarrello } from './carrello.action';

export interface CarrelloState{
    carrello: Prodotto[];
}

export const initialState: CarrelloState = {
    carrello: []
}

//gestisce transazioni State (da vecchio a nuovo stato)
export const carrelloReducer = createReducer(
    initialState,
    on(initCarrello, (state, {carrello}) => ({...state, carrello})),
    on(aggiungiProdottoCarrello, (state, {prodotto}) => ({ ...state, carrello: [...state.carrello, prodotto] })),
    on(rimuoviProdotto, (state, {id}) => ({ ...state, carrello: state.carrello.filter(item => item.id !== id) })),
    on(updateCarrello,(state,{prodotti})=>({...state,prodotti:prodotti}))
)