import { User } from './../../core/model/user.interface';
import { createAction, props } from '@ngrx/store';

export const saveCurrentUser = createAction('[Users] salva utente', props<{user: User}>());

export const retrieveAllUsers =  createAction('[Users] retrieve all users');
export const postUser = createAction('[User] aggiungi utente al server', props<{user: User}>());

export const initUsers = createAction('[Users] inizializza', props<{users: User[]}>());
export const insertUser = createAction('[Users] inserisci utente', props<{user: User}>());
