import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
  selector: 'app-regiscli',
  templateUrl: './regiscli.page.html',
  styleUrls: ['./regiscli.page.scss'],
})

export class RegiscliPage implements OnInit {

  formRegistro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome de Usuário é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O Nome de Usuário deve ter pelo menos 3 caracteres.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo Email é obrigatório.' },
      { tipo: 'email', mensagem: 'Email Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório' },
      { tipo: 'minlength', mensagem: 'A Senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A Senha deve ter no máximo 8 caractéres.' },
    ],
    confirmarSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar a Senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha.' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
   }

  ngOnInit() {
  }

  async salvarRegistro() {
    const senha = this.formRegistro.value.senha;
    const confirmarSenha = this.formRegistro.value.confirmarSenha;

    if (senha === confirmarSenha) {

      const email = this.formRegistro.value.email;
      const password = this.formRegistro.value.senha;

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      catch(error) {
        console.log(`There was an error: ${error}`);
        alert('Erro! Talvez você já possua um registro.')
      }

    } else {
      alert('A confirmação de senha não está correta!')
    }

  }

}


