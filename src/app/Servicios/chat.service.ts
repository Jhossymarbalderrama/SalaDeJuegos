import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getDatabase, ref, set, onValue, push} from "firebase/database";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  public items : any;
  database : any;

  constructor(
    private auth: AuthService
  ) {
    this.database = getDatabase();
    this.readData();
  }
  
  writeUserData(mensaje : any) {
    let listref = ref(this.database,'chat');
    let nvoMjs = push(listref);
    set(nvoMjs,mensaje);
  }

  readData(){
    let refe = ref(this.database,'chat');

    onValue(refe, (snapshot)=>{
      this.items = Object.values(snapshot.val());
    });
  }
}
