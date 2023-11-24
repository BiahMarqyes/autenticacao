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
  selector: 'app-perfilcli',
  templateUrl: './perfilcli.page.html',
  styleUrls: ['./perfilcli.page.scss'],
})
export class PerfilcliPage implements OnInit {
  public alertButtons = ['OK'];

  constructor() {}

  async ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.atualizar();
      } else {
        console.log('Usuário não autenticado!');
      }
    });
  }

  async atualizar() {
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;

      const users = collection(firestore, 'users');

      const userDoc = doc(users, uid);

      const docSnapshot = await getDoc(userDoc);

      var divNome = document.getElementById('idnome');
      var divSobre = document.getElementById('idsobre');
      var divHorario = document.getElementById('idhorario');
      var divEndereco = document.getElementById('idendereco');

      if (docSnapshot.exists()) {
        const docData = docSnapshot.data() as { nome?: string, sobre?: string, horario?: string, rua?: string, numero?: string, bairro?: string };

        let displayNome = '';
        if (docData.nome) {
          displayNome += `<h3>${docData.nome}</h3>`;
        }
        let displaySobre = '';
        if (docData.sobre) {
          displaySobre += `<p>${docData.sobre}</p>`;
        }
        let displayHorario = '';
        if (docData.horario) {
          displayHorario += `<p>${docData.horario}</p>`;
        }
        let displayEndereco = '';
        if (docData.rua) {
          displayEndereco += `<p><strong>Rua: </strong>${docData.rua}</p>`;
        }
        if (docData.numero) {
          displayEndereco += `<p><strong>Número: </strong>${docData.numero}</p>`;
        }
        if (docData.bairro) {
          displayEndereco += `<p><strong>Bairro: </strong>${docData.bairro}</p>`;
        }

        if (divNome) {
          divNome.innerHTML = displayNome;
        } else {
          console.error('Informação "nome" não encontrada');
        }
        if (divSobre) {
          divSobre.innerHTML = displaySobre;
        } else {
          console.error('Informação "sobre" não encontrada');
        }
        if (divHorario) {
          divHorario.innerHTML = displayHorario;
        } else {
          console.error('Informação "horario" não encontrada');
        }
        if (divEndereco) {
          divEndereco.innerHTML = displayEndereco;
        } else {
          console.error('Informação "endereco" não encontrada');
        }
      } else {
        console.log('Documento não existe');
      }
    } else {
      console.log('Usuário não autenticado.');
    }
  }
}
