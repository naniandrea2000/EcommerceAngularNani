 import { LoginRegisterState } from './loginRegister.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectloginRegisterState = (state: AppState) => state.LoginRegisterState;

export const getCurrentUser = createSelector(
    selectloginRegisterState,
    (state: LoginRegisterState) => state.currentUser
);
