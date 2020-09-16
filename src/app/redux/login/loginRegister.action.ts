import { User } from './../../core/model/user.interface';
import { createAction, props } from '@ngrx/store';

export const saveCurrentUser = createAction('[Users] save current', props<{user: User}>());

export const retrieveAllUsers =  createAction('[Users] retrieve all users');
export const postUser = createAction('[User] add to server', props<{user: User}>());

export const initUsers = createAction('[Users] init', props<{users: User[]}>());
export const insertUser = createAction('[Users] insert', props<{user: User}>());
