import { LoginRegisterState, loginRegisterReducer } from './login/loginRegister.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { prodottiReducer, ProdottiState } from './prodotti/prodotti.reducer';

export interface AppState {
    LoginRegisterState: LoginRegisterState;
    prodottiState: ProdottiState;
}

export const reducers: ActionReducerMap<AppState> = {
    LoginRegisterState : loginRegisterReducer,
    prodottiState: prodottiReducer,
};