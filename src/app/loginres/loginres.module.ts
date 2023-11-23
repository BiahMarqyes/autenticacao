import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginresPageRoutingModule } from './loginres-routing.module';

import { LoginresPage } from './loginres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    LoginresPageRoutingModule
  ],
  declarations: [LoginresPage]
})
export class LoginresPageModule {}
