import { createReducer, on, Action } from '@ngrx/store'
import { User } from 'src/app/core/model/user.interface';
import { saveCurrentUser, initUsers, insertUser } from './loginRegister.action';

export interface LoginRegisterState {
    currentUser: User;
    users: User[];
}

export const initialState: LoginRegisterState = {
    currentUser: null,
    users: []
};

const loginRegisterReducerFun = createReducer(
    initialState,
    on(saveCurrentUser, (state, { user }) => ({ ...state, currentUser: user })),
    on(initUsers, (state, { users }) => ({ ...state, users: users })),
    on(insertUser, (state, { user }) => ({ ...state, users: [...state.users, user] }))
);

export function loginRegisterReducer(state: LoginRegisterState | undefined, action: Action) {
    return loginRegisterReducerFun(state, action);
}