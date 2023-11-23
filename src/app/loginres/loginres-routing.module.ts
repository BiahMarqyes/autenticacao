import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginresPage } from './loginres.page';

const routes: Routes = [
  {
    path: '',
    component: LoginresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginresPageRoutingModule {}
