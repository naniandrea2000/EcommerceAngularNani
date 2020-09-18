import { createSelector, select } from '@ngrx/store';
import { AppState } from '..';
import { ProdottiState } from './prodotti.reducer';

export const selectProdottiState = (state: AppState) => state.prodottiState;

export const selectProdotti = createSelector(
    selectProdottiState,
    (state: ProdottiState) => state.prodotti
)

export const getProdottoById = createSelector(
    selectProdottiState,
    (state: ProdottiState, props: { id: number }) => state.prodotti.find(item => item.id === props.id)
);
