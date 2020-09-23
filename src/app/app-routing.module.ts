
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard.service';
import { RouteGuardService } from './route-guard.service';




const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canDeactivate: [RouteGuardService] },
  { path: 'signin', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule), canActivate: [RouteGuardService] },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuard] },
  { path: 'personalizza', loadChildren: () => import('./features/personalizza/personalizza.module').then(m => m.PersonalizzaModule), canLoad: [LoginGuard]},
  { path: 'personalizza/:id', loadChildren: () => import('./features/personalizza/personalizza.module').then(m => m.PersonalizzaModule), canLoad: [LoginGuard] },
  { path: 'carrello', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule),canLoad: [LoginGuard] }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{ }