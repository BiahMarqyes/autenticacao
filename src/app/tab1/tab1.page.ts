import { Component } from '@angular/core';

import { app } from '../app.module';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { Router } from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  clinicas = collection(getFirestore(app), 'users');
  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.listaClinicas();
  }

  async listaClinicas() {
    const auth = getAuth(app);

    var divNome = document.getElementById('idnome');

    onSnapshot(this.clinicas, (snapshot) => {
      this.users = [];

      snapshot.forEach((doc) => {
        const userData = doc.data() as { nome?: string };

        if (userData.nome) {
          this.users.push(userData.nome);
        }
      });

      if (divNome) {
        divNome.innerHTML = this.users
          .map(
            (nome) =>
              `<ion-card button style="text-align: center;
  padding: 3%;
  background-color: #278080;
  color: rgba(255, 255, 255, 0.582);
  color: #fff;
  margin: 5%;
  margin-bottom: 6%;
  margin-top: 2%;">
    <ion-card-header style="padding-bottom: 2%;">
      <img src="/assets/mmb.jpeg" />
      <h4 style="color: #fff;">${nome}</h4>
    </ion-card-header>
    <ion-card-content>
      clique para obter mais informações
    </ion-card-content>
  </ion-card>`
          )
          .join('');
      } else {
        console.error('Elemento HTML com o id "idnome" não encontrado');
      }
    });
  }

}
