import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HttpComunicationsService } from 'src/app/core/http-comunications/http-comunications.service';
import { retrieveAllUsers, initUsers, postUser, insertUser } from './loginRegister.action';
import { User } from 'src/app/core/model/user.interface';

@Injectable()
export class UsersEffect {

    insertUser$ = createEffect(() => this.actions$.pipe(
        ofType(postUser),
        switchMap(action => this.HttpCommunicationsService.retrievePostCall<User>("users/", action.user).pipe(
            switchMap(user => [insertUser({ user })])
        ))
    ))

    retrieveAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllUsers),
        switchMap(() => this.HttpCommunicationsService.retrieveGetCall<User[]>("users").pipe(
            map(users => initUsers({ users }))
        ))
    ));

    constructor(private actions$: Actions, private store: Store,
        private HttpCommunicationsService: HttpComunicationsService) {
    }

}