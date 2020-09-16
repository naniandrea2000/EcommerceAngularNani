import { LoginRegisterState, loginRegisterReducer } from './login/loginRegister.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    LoginRegisterState: LoginRegisterState;
}

export const reducers: ActionReducerMap<AppState> = {
    LoginRegisterState : loginRegisterReducer
};