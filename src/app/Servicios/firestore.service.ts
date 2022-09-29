import { Injectable } from '@angular/core';

import { Firestore, collection, addDoc,collectionData,doc,deleteDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  listaUsuariosCollectionReference: any;
  logLoginUsuariosCollectionReference: any;

  constructor(public FireStore: Firestore) {
    this.listaUsuariosCollectionReference = collection(this.FireStore, 'usuarios');
    this.logLoginUsuariosCollectionReference = collection(this.FireStore, 'logInicioSesionUsuarios');
  }

  // Altas
  AltaUsuarios(usuario: any){
    return addDoc(this.listaUsuariosCollectionReference,usuario)
  }

  AltaLogUsuarios(usuario: any){
    return addDoc(this.logLoginUsuariosCollectionReference,usuario)
  }

  // Bajas
  BajaUsuarios(usuario:any){
    const usuarioDocRef = doc(this.FireStore, `usuarios/${usuario.id}`);
    return deleteDoc(usuarioDocRef);
  }

  // Listados
  ListaUsuarios():Observable<any[]>{
    return collectionData(this.listaUsuariosCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }
}
