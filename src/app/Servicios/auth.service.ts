import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogueado: any;
  
  constructor(private Router: Router) { 
    // if(this.usuarioLogueado == undefined){
    //   this.Router.navigateByUrl('/login');
    // }
  }
}
