import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { app } from '../app.module';
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const db = getDatabase();
const auth = getAuth(app);

@Component({
  selector: 'app-loginres',
  templateUrl: './loginres.page.html',
  styleUrls: ['./loginres.page.scss'],
})

export class LoginresPage implements OnInit {

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

    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(userCredential.user);
      this.route.navigate(['tabs/tab1'])
    }
    catch (error) {
      console.log(error);
      alert('Você não possui uma conta registrada!')
    }
  }

  logout = async () => {
    try {
      await signOut(auth);

      alert('Voce saiu da sua conta');
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar fazer logout');
    }
  }

}
