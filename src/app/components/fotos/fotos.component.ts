import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { doc, getDoc } from "firebase/firestore";

export interface Item {nombre: string; url: string}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  items: Observable<Item[]>;
  firestore: Firestore = getFirestore();

  
  constructor() {

    const itemCollection = collection(this.firestore, 'img');
    // @ts-ignore
    this.items = collectionData(collection);

  }

  ngOnInit(): void {
  }

}
