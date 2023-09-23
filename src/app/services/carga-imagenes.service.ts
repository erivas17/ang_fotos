import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileItem } from '../models/file-item';
import { doc, setDoc, getFirestore } from "firebase/firestore"; 


@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor() {
    
   }
  
   async guardarImagen(imagen: {nombre: string, url: string}) {
    const db = getFirestore();
    await setDoc(doc(db, `/${this.CARPETA_IMAGENES}`), imagen);

    //this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
   }

   cargarImagenesFirebase(imagenes: FileItem[]){

   }
}
