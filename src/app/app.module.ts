import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

const firebaseConfig = {
  apiKey: "AIzaSyBirNVB38jTM4BvzoXvs2JRmoqPehnNZQo",
  authDomain: "autentica-c57f6.firebaseapp.com",
  projectId: "autentica-c57f6",
  storageBucket: "autentica-c57f6.appspot.com",
  messagingSenderId: "533716695287",
  appId: "1:533716695287:web:4dc5e6dd6f9abbd8a73bf2",
  measurementId: "G-T2GBYFMZ5Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async() => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
}

btnLogin.addEventListener("click", loginEmailPassword);


