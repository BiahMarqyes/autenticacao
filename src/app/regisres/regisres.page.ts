import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisres',
  templateUrl: './regisres.page.html',
  styleUrls: ['./regisres.page.scss'],
})
export class RegisresPage implements OnInit {

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

  constructor(private formBuilder: FormBuilder, private route: Router,) {
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
    if(this.formRegistro.valid){
      let nome = this.formRegistro.value.nome;
      let email = this.formRegistro.value.email;
      let senha = this.formRegistro.value.senha;
      console.log(this.formRegistro)
    }else{
      alert('Formulário Inválido!');
    }
  }

}
