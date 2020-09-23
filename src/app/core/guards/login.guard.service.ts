import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { saveCurrentUser } from 'src/app/redux/login/loginRegister.action';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(private router: Router, private store: Store) { }
  
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("user") != null) {
      this.store.dispatch(saveCurrentUser({user: JSON.parse(sessionStorage.getItem("user"))}));
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
