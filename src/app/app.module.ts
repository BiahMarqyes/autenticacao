import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBirNVB38jTM4BvzoXvs2JRmoqPehnNZQo",
        authDomain: "autentica-c57f6.firebaseapp.com",
        projectId: "autentica-c57f6",
        storageBucket: "autentica-c57f6.appspot.com",
        messagingSenderId: "533716695287",
        appId: "1:533716695287:web:4dc5e6dd6f9abbd8a73bf2",
        measurementId: "G-T2GBYFMZ5Q"
      }
    ),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


