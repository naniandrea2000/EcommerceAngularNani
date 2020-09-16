import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {loginRegisterService} from 'src/app/core/services/login-register.service';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private router: Router, private loginRegisterService: loginRegisterService, private store: Store) { }

  executeSignUp(user: User){
    console.log("Signup service")

    this.loginRegisterService.eseguiRegistrazione(user).subscribe(()=>{"registrazione effettuata"}, ()=>{"registrazione fallita"})
  }
}
