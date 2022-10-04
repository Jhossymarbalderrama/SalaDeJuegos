import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { AuthService } from 'src/app/Servicios/auth.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MenuComponent implements OnInit {

  usuarioLogin: Usuario = {};
  screenDesktop:boolean = true;

  screenObservable:any; //Observable del tamaño de pantalla o ventana
  screenStatic:any = window.screen.width; //Tamaño de pantalla ancho fijo

  constructor(
    private router : Router,
    private AuthService:AuthService,
    private offcanvasService: NgbOffcanvas

  ) {
    this.usuarioLogin = this.AuthService.usuarioLogueado;
  }

  ngOnInit(): void {  
    this.menuConfig(this.screenStatic);
  }

  // openTop(content: TemplateRef<any>) {
  //   this.offcanvasService.open(content, { position: 'top' });
  // }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  
  onResize(event:any){
    this.screenObservable = event.target.innerWidth; 
    this.menuConfig(this.screenObservable);
  }

  menuConfig(screenLocal:any){
    if(screenLocal>1024){
      this.screenDesktop = true;
    }else{
      this.screenDesktop = false;
    }
  }
}

