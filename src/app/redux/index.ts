import { LoginRegisterState, loginRegisterReducer } from './login/loginRegister.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { prodottiReducer, ProdottiState } from './prodotti/prodotti.reducer';
import { CarrelloState, carrelloReducer } from './carrello/carrello.reducer';

export interface AppState {
    LoginRegisterState: LoginRegisterState;
    prodottiState: ProdottiState;
    carrelloState: CarrelloState;
}

export const reducers: ActionReducerMap<AppState> = {
    LoginRegisterState : loginRegisterReducer,
    prodottiState: prodottiReducer,
    carrelloState: carrelloReducer
};