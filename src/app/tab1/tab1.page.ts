import { Component } from '@angular/core';

import { app } from '../app.module';
import {
  getFirestore,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  clinicas = collection(getFirestore(app), 'users');
  users: any[] = [];

  constructor() {}

  ngOnInit() {
    this.listaClinicas();
  }

  async listaClinicas() {
    const auth = getAuth(app);

    var divNome = document.getElementById('idnome');

    onSnapshot(this.clinicas, (snapshot) => {
      this.users = [];

      snapshot.forEach((doc) => {
        const userData = doc.data() as { nome?: string };;

        let displayNome = '';
        if (userData.nome) {
          displayNome += `<p>${userData.nome}</p>`;
        }

        if (divNome) {
          divNome.innerHTML = displayNome;
        } else {
          console.error('Informação "sobre" não encontrada');
        }
      });
    });
  }

}
