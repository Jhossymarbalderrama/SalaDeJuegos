import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { Usuario } from 'src/app/Clases/usuario';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public logUsuarios: Usuario = {};
  public usuario: Usuario = {
    correo: "",
    clave: "",
    claveReingreso: ""
  };

  public formRegistro: FormGroup;
  public listaUsuarios: any = [];
  public auxLista: any = [];
  public userExist:boolean = false;
  public claveVerificada: boolean = false;
  public correoVerificado:boolean = false;

  constructor(
    private router:Router,
    private FirestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private AuthService: AuthService
  ) {    
    this.formRegistro = this.formBuilder.group({
      correo: ['',[Validators.required,Validators.email]],
      clave: ['',[Validators.required,Validators.minLength(6)]],
      claveReingreso: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {   
    this.FirestoreService.ListaUsuarios().subscribe(value =>{
      this.listaUsuarios = value;   
      this.cargarArray();
    });    
  }

  cargarArray(){
    for (const item of this.listaUsuarios) {
      this.auxLista.push(item);
    }
  }

  registrarse():any{    
    if(this.formRegistro.valid){

      if(this.validacionDatosUsuario()){
          this.userExist = false;
          let date: Date = new Date();
          
          this.logUsuarios = {
            usuario: this.usuario,
            fechaIngreso: date
          }

          this.AuthService.usuarioLogueado = this.usuario;
    
          this.FirestoreService.AltaUsuarios(this.usuario);
          this.FirestoreService.AltaLogUsuarios(this.logUsuarios); 
          this.router.navigateByUrl('/home');           
      }  
    }  
  }

  validacionDatosUsuario():boolean{  
    let todoOk = true;

    this.usuario = {
      correo: this.formRegistro.get('correo')?.value,
      clave: this.formRegistro.get('clave')?.value,
      claveReingreso: this.formRegistro.get('claveReingreso')?.value
    };    
    
    if(this.usuario.clave !==  this.usuario.claveReingreso){
      this.claveVerificada = true;
      todoOk = false;
    }else{
      this.claveVerificada = false;
    }

    for (const item of this.auxLista) {       
      if(item.correo == this.usuario.correo){          
        this.userExist = true;
        todoOk = false;
        break;
      }else{
        this.userExist = false;         
      }
    }

    return todoOk;
  }
  
  volverLogin():void{
    this.router.navigateByUrl("/login");
  }

}
