import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatcliPageRoutingModule } from './chatcli-routing.module';

import { ChatcliPage } from './chatcli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatcliPageRoutingModule
  ],
  declarations: [ChatcliPage]
})
export class ChatcliPageModule {}
