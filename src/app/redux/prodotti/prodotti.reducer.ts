  import {Action, createReducer, on} from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { initProdotti } from './prodotti.action';

export interface ProdottiState {
  prodotti: Prodotto[];
}

export const initialState: ProdottiState = {
  prodotti: []
};

export const prodottiReducer = createReducer(
  initialState,
  on(initProdotti, (state, {prodotti}) => ({...state, prodotti})),
);

export function reducer(state: ProdottiState | undefined, action: Action) {
  return prodottiReducer(state, action);
}