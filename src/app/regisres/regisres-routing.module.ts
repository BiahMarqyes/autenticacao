import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisresPage } from './regisres.page';

const routes: Routes = [
  {
    path: '',
    component: RegisresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisresPageRoutingModule {}
