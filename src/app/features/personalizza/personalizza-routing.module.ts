import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizzaComponent } from './personalizza.component';

const routes: Routes = [{ path: '', component: PersonalizzaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizzaRoutingModule { }
