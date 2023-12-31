import { Component } from '@angular/core';

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
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  async ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.usuario();
      } else {
        console.log('Usuário não autenticado!');
      }
    });
  }

  async usuario() {
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;

      const pacientes = collection(firestore, 'pacientes');

      const userDoc = doc(pacientes, uid);

      const docSnapshot = await getDoc(userDoc);

      var divNome = document.getElementById('idnome');
      var divEmail = document.getElementById('idemail');

      if (docSnapshot.exists()) {
        const docData = docSnapshot.data() as { nome?: string, email?: string };

        let displayNome = '';
        if (docData.nome) {
          displayNome += `<h2>${docData.nome}</h2>`;
        }
        let displayEmail = '';
        if (docData.email) {
          displayEmail += `<h2>${docData.email}</h2>`;
        }

        if (divNome) {
          divNome.innerHTML = displayNome;
        } else {
          console.error('Informação "sobre" não encontrada');
        }
        if (divEmail) {
          divEmail.innerHTML = displayEmail;
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
