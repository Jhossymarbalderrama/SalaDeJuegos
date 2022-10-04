import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  fotoPerfil: string = "../../../assets/img/quienSoy/perfil.png";
  fotoJuegoBlackJack:string = "../../../assets/img/juegos/black jack/BlackJack.png";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
