import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginres',
  templateUrl: './loginres.page.html',
  styleUrls: ['./loginres.page.scss'],
})
export class LoginresPage implements OnInit {

  formLogin: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome de Usuário é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O Nome de Usuário deve ter pelo menos 3 caracteres.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A Senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A Senha deve ter no máximo 8 caractéres.' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.formLogin = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    });
   }

  ngOnInit() {
  }

  async entrar() {
    if(this.formLogin.valid){
      console.log(this.formLogin);
    }else{
      alert('Formulário Inválido!');
    }
  }

}
