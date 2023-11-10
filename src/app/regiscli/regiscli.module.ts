import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiscliPageRoutingModule } from './regiscli-routing.module';

import { RegiscliPage } from './regiscli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    RegiscliPageRoutingModule
  ],
  declarations: [RegiscliPage]
})
export class RegiscliPageModule {}
