import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { app } from '../app.module';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, DocumentData } from "firebase/firestore";
import { set } from 'firebase/database';

const auth = getAuth(app);
const firestore = getFirestore(app);

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

      const nome = this.formRegistro.value.nome;
      const email = this.formRegistro.value.email;
      const password = this.formRegistro.value.senha;

      try {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(data => {
          const uid = data.user.uid;

          const users = collection(firestore, 'users');
          users.doc(uid).set({
            nome: this.formRegistro.value.nome,
            email: this.formRegistro.value.email,
          });
          alert('Conta criada com sucesso!')
        })
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


