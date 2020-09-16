import { createReducer, on, Action } from '@ngrx/store'
import { User } from 'src/app/core/model/user.interface';
import { saveCurrentUser, initUsers, insertUser } from './loginRegister.action';

export interface UsersState {
    currentUser: User;
    users: User[];
}

export const initialState: UsersState = {
    currentUser: null,
    users: []
};

const usersReducerFun = createReducer(
    initialState,
    on(saveCurrentUser, (state, { user }) => ({ ...state, currentUser: user })),
    on(initUsers, (state, { users }) => ({ ...state, users: users })),
    on(insertUser, (state, { user }) => ({ ...state, users: [...state.users, user] }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return usersReducerFun(state, action);
}