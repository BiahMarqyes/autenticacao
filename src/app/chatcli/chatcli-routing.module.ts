import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatcliPage } from './chatcli.page';

const routes: Routes = [
  {
    path: '',
    component: ChatcliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatcliPageRoutingModule {}
