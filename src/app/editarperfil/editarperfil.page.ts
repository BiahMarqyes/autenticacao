import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { app } from '../app.module';
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const firestore = getFirestore(app);

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  formInformacoes: FormGroup;

  mensagens = {
    rua: [
      { tipo: 'required', mensagem: 'O campo Rua é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A Rua deve ter pelo menos 3 caracteres.' },
    ],
    numero: [
      { tipo: 'required', mensagem: 'O campo Número é obrigatório.' },
    ],
    bairro: [
      { tipo: 'required', mensagem: 'O campo Bairro é obrigatório.' },
    ],
    horario: [
      { tipo: 'required', mensagem: 'O campo Horário de Atendimento é obrigatório.' },
    ],
    sobre: [
      { tipo: 'required', mensagem: 'O campo Sobre a clínica é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O texto deve ter pelo menos 10 caracteres.', },
    ],
  };

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.formInformacoes = this.formBuilder.group({
      rua: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      numero: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required])],
      horario: ['', Validators.compose([Validators.required])],
      sobre: ['', Validators.compose([Validators.required, Validators.minLength(10),])],
    });
   }

  ngOnInit() {
  }

  async salvarInformacoes() {
    const rua = this.formInformacoes.value.rua;
    const numero = this.formInformacoes.value.numero;
    const bairro = this.formInformacoes.value.bairro;
    const horario = this.formInformacoes.value.horario;
    const sobre = this.formInformacoes.value.sobre;

      const user = auth.currentUser;

      if (user) {
        const uid = user.uid;

        const users = collection(firestore, 'users');

        const userDoc = doc(users, uid);

        setDoc(userDoc, {
          rua: rua,
          numero: numero,
          bairro: bairro,
          horario: horario,
          sobre: sobre,
        }, {merge: true})

        .then(() => {
          console.log("Dados do usuário adicionados com sucesso!");
          this.route.navigate(['perfilcli'])
        })
        .catch((error) => {
          console.error("Erro ao adicionar dados do usuário:", error);
        });
      } else {
        console.log('Usuário não autenticado.');
      }

  }

}
