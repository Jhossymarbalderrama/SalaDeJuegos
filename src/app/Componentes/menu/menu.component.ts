import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogin: Usuario = {
    
  };

  constructor(
    private router : Router,
    private AuthService:AuthService
  ) {
    //this.usuarioLogin = this.AuthService.usuarioLogueado;
  }

  ngOnInit(): void {  
  }

}
