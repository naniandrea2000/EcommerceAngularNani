import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'Login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }, { path: 'Home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'Register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) }, { path: 'Personalizza', loadChildren: () => import('./features/personalizza/personalizza.module').then(m => m.PersonalizzaModule) }, { path: 'Carrello', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
