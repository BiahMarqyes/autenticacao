import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiscliPage } from './regiscli.page';

const routes: Routes = [
  {
    path: '',
    component: RegiscliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiscliPageRoutingModule {}
