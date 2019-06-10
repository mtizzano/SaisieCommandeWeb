import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({

      apiKey: "AIzaSyB9ML0pssdaRyVA-Pjb6sajfmtOISsVEa0",
      authDomain: "saisie-commande-web.firebaseapp.com",
      projectId: "saisie-commande-web",

    });



    var db = firebase.firestore();
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });


  }

}
