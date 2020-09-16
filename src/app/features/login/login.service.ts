import { Store } from '@ngrx/store';
import {loginRegisterService} from 'src/app/core/services/login-register.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.interface';
import { saveCurrentUser } from 'src/app/redux/login/loginRegister.action';

@Injectable()
export class LoginService {

  constructor(private router: Router, private loginRegisterService: loginRegisterService, private store: Store) { }

  eseguiLogin(username: string, password: string) {
    console.log("sono dentro")
    this.loginRegisterService.eseguiLogin(username, password).subscribe((users: User[]) => {
      if (users && users.length > 0) {
        sessionStorage.setItem("user", JSON.stringify(users[0]));
        this.store.dispatch(saveCurrentUser({user: users[0]}));
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });

  }
}