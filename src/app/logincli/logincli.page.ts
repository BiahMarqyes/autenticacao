import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
const db = getDatabase();
const auth = getAuth(app);

@Component({
  selector: 'app-logincli',
  templateUrl: './logincli.page.html',
  styleUrls: ['./logincli.page.scss'],
})


export class LogincliPage implements OnInit {

  formLogin: FormGroup;

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'O campo Email é obrigatório.' },
      { tipo: 'email', mensagem: 'Email Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A Senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A Senha deve ter no máximo 8 caractéres.' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.formLogin = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    });
   }

  ngOnInit() {
  }

  loginEmailPassword = async () => {
      const loginEmail = this.formLogin.value.email;
      const loginPassword = this.formLogin.value.senha;

      try{
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        this.route.navigate(['tabs/tab1'])
      }
      catch(error) {
        console.log(error);
        alert('erro ao tentar fazer o login')
      }
  }

}

