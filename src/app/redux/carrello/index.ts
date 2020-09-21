import { createSelector, select } from '@ngrx/store';
import { AppState } from '..';
import { CarrelloState } from './carrello.reducer';

export const selectProdottoState = (state: AppState) => state.carrelloState;

export const getProdotti = createSelector(
    selectProdottoState,
    (state: CarrelloState) => state.carrello
)
