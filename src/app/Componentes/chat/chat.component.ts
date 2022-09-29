import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';

import { Mensaje } from 'src/app/Clases/mensaje';
import { getDatabase, ref, onValue} from "firebase/database";
import { ChatService } from 'src/app/Servicios/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  mensaje : Mensaje;

  constructor(
    public Chat : ChatService,
    public AuthService : AuthService
  ) {
    this.mensaje = {
      user: '',
      message: '',
      date: Date().toString(),
    }
  }

  ngOnInit(): void {
  }

  sendMessage()
  {
    let hora = new Date();
    this.mensaje.user = this.AuthService.usuarioLogueado.correo;
    this.mensaje.date = hora.getHours() + ':' + hora.getMinutes();
    this.Chat.writeUserData(this.mensaje);
    this.mensaje.message = '';
  }
}
