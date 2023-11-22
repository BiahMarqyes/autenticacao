import { Component, OnInit } from '@angular/core';
import { app } from '../app.module';
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const firestore = getFirestore(app);

@Component({
  selector: 'app-perfilcli',
  templateUrl: './perfilcli.page.html',
  styleUrls: ['./perfilcli.page.scss'],
})
export class PerfilcliPage implements OnInit {

  public alertButtons = ['OK'];

  constructor() { }

  ngOnInit() {
  }



}
