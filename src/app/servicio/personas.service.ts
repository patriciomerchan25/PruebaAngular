import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Persona } from '../domain/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  lstProducts = new Array()

  products: any;

  private personaCollection: AngularFirestoreCollection<Persona>;

  constructor(private afs: AngularFirestore) { 
    this.personaCollection = afs.collection<Persona>('personas');
  }


  getPersonaFire(){
    
    return  this.personaCollection.valueChanges();
  
  
    }
}
