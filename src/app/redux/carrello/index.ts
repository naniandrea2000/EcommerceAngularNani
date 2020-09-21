import { createSelector, select } from '@ngrx/store';
import { AppState } from '..';
import { CarrelloState } from './carrello.reducer';

export const selectClotheState = (state: AppState) => state.carrelloState;

//Selector = pure function per accedere a pezzo dello State (clothes in questo caso)
//da richiamare con una get per accedere agli elementi del carrello
export const getProdotto = createSelector(
    selectClotheState,
    (state: CarrelloState) => state.carrello
)
