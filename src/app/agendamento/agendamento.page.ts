import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { app } from '../app.module';
import { getDatabase, set, ref } from "firebase/database";

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  formMsg: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formMsg = this.formBuilder.group({
      mensagem: [''],
    });
  }

  ngOnInit() {
  }

  async enviarMensagem() {
    var mensagem = this.formMsg.value.mensagem;
    const database = getDatabase(app);

    set(ref(database, 'mensagem'), {
      mensagem: mensagem
    });

    return false;
}

}

