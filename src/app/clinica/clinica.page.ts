import { Component, OnInit } from '@angular/core';

import { app } from '../app.module';
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

const firestore = getFirestore(app);

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.page.html',
  styleUrls: ['./clinica.page.scss'],
})
export class ClinicaPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.nomeClinica();
      } else {
        console.log('Usuário não autenticado!');
      }
    });
  }

  async nomeClinica() {
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;

      const pacientes = collection(firestore, 'pacientes');

      const userDoc = doc(pacientes, uid);

      const docSnapshot = await getDoc(userDoc);

      var divNome = document.getElementById('idnome');

      if (docSnapshot.exists()) {
        const docData = docSnapshot.data() as { nome?: string };

        let displayNome = '';
        if (docData.nome) {
          displayNome += `<h2>${docData.nome}</h2>`;
        }

        if (divNome) {
          divNome.innerHTML = displayNome;
        } else {
          console.error('Informação "sobre" não encontrada');
        }
      } else {
        console.log('Documento não existe');
      }
    } else {
      console.log('Usuário não autenticado.');
    }
  }

}
