import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { FirestoreService } from 'src/app/Services/firestore.service';
// import { Usuario } from 'src/app/interfaces/usuario';
// import { AuthService } from 'src/app/Services/auth.service';

import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Usuario } from 'src/app/Clases/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logUsuarios: Usuario = {};

  public usuario: any = {
    correo: "",
    clave: ""
  }

  public formLogin: FormGroup;

  listaUsuario: any = [];
  auxLista: any = [];
  existeUsuario: boolean = true;

  constructor(
    private router:Router,
    private FirestoreService: FirestoreService,
    private AuthService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.formLogin = this.formBuilder.group({
      correo: ['',[Validators.required]],
      clave: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.FirestoreService.ListaUsuarios().subscribe(value =>{      
      this.listaUsuario = value;          
      this.cargarArray();
    });   
        
  }

  cargarArray(){
    for (const item of this.listaUsuario) {
      this.auxLista.push(item);
    }
  }

  login():void{
    if(this.formLogin.valid){     
      this.usuario = {
        correo: this.formLogin.get('correo')?.value,
        clave: this.formLogin.get('clave')?.value
      }; 

      for (const item of this.auxLista) {
        if(item.correo == this.usuario.correo && item.clave == this.usuario.clave){   
          let date: Date = new Date();

          this.logUsuarios.usuario = this.usuario;          
          this.logUsuarios.fechaIngreso = date;

          this.FirestoreService.AltaLogUsuarios(this.logUsuarios);    
          this.AuthService.usuarioLogueado = this.usuario;
          this.router.navigateByUrl('/home');
        }else{
          this.existeUsuario = false;
        }        
      } 
    }    
  }

  onLoginAuto(invitado:number):void{
    switch (invitado) {
      case 1:
        this.formLogin.get('correo')?.setValue("Invitado1@gmail.com");
        this.formLogin.get('clave')?.setValue("Invitado1");
        break;
    
      case 2:
        this.formLogin.get('correo')?.setValue("Invitado2@gmail.com");
        this.formLogin.get('clave')?.setValue("Invitado2");
        break;
    }
  }

  registrarse():void{
    this.router.navigateByUrl('/registro');
  }

}
