import { Component, OnInit } from '@angular/core';

import { ApiRestService } from 'src/app/Servicios/api-rest.service';
import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { AuthService } from 'src/app/Servicios/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  fallosGame: number = 0;
  puntosGame: number = 0;


  cartaSistema: any;
  cartaMia: any;

  sumaCartasSistema:number = 0;
  sumaCartasMias:number = 0;

  cartas : any;
  cartasSinCartaSistema : any;

  puntosMios: number = 0;


  disabledMayorMenor:boolean = true;
  disabledIniciarJuego:boolean = true;
  reiniciarGame:boolean = false;
  
  constructor(
    private ApiRestService: ApiRestService,
    private FirestoreService: FirestoreService,
    private AuthService: AuthService,
    private ToastrService:ToastrService
  ) {    
    
    this.reiniciar();
    this.getMazoApi();
  }

  ngOnInit(): void {
  }

  getMazoApi(){
    this.ApiRestService.setURL("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
    this.ApiRestService.callAPI().subscribe((value : any)=>{
      this.cartas = value.cards;
    });
  }

  iniciarJuego(){

    this.disabledIniciarJuego = true;
    this.disabledMayorMenor = false;

    let random : number = Math.floor(Math.random() * this.cartas.length);

    this.establecerValores(this.cartas[random],this.cartaSistema);

    this.cartasSinCartaSistema = this.cartas.filter((carta:any) => carta != this.cartaSistema);
  }

  establecerValores(mazo : any,carta : any):void
  {
    carta.img = mazo.image;

    switch(mazo.value)
    {
      case "ACE":
        carta.valor = 1;
        break;    
      case "KING":
        carta.valor = 12; 
        break;
      case "QUEEN":
        carta.valor = 11;
        break;
      case "JACK":
        carta.valor = 10;
        break;
      default:
        carta.valor = parseInt(mazo.value);
        break; 
    }
  }

  compracionMayorMenor(comparacion: string)
  {
    this.disabledMayorMenor = true;
    this.sacoMiCarta();

    switch (comparacion) {
      case 'mayor': 
        if(this.cartaMia.valor>this.cartaSistema.valor){ 
          this.puntosMios += 50;  
          this.mayorGanasteToast();    
        }else if(this.cartaMia.valor==this.cartaSistema.valor){
          this.empateToast();
        }else{
          this.fallosGame++;
          this.menorPerdisteToast();
          if(this.fallosGame == 3){
            this.tresFallos();
          }
        }

        break;
    
      case 'menor':
        if(this.cartaMia.valor<this.cartaSistema.valor){
          this.puntosMios += 50; 
          this.menorGanasteToast();
        }else if(this.cartaMia.valor==this.cartaSistema.valor){
          this.empateToast();
        }else{
          this.fallosGame++;
          this.mayorPerdisteToast();
          if(this.fallosGame == 3){
            this.tresFallos();
          }
        }
        break;
    }

    setTimeout(() => {
      this.reiniciarCartas();
    }, 1500);
  }

  tresFallos(){
    this.disabledMayorMenor = false;
    this.disabledIniciarJuego = true;
    this.reiniciarGame = true;
  
    this.registroPuntos();
    this.reiniciarCartas();
  }

  registroPuntos():void{
    let formateador = new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'medium' });
    let fecha = new Date();
    let fechaFormateada = formateador.format(fecha);

    let date: any = {
      usuario: this.AuthService.usuarioLogueado,
      fecha: fechaFormateada,
      puntaje: this.puntosMios,
      juego: "mayor-menor"
    }

    this.FirestoreService.AltaResultadoJuego(date);
  }

  sacoMiCarta():void{
    let random : number = Math.floor(Math.random() * this.cartasSinCartaSistema.length);

    this.establecerValores(this.cartas[random],this.cartaMia);
  }

  reiniciar(){
    this.reiniciarCartas();

    this.puntosMios = 0;
    this.fallosGame = 0;
    this.reiniciarGame = false;
  }

  reiniciarCartas(){
    this.disabledMayorMenor = true;
    

    if(this.reiniciarGame){
      this.disabledIniciarJuego = true;
    }else{
      this.disabledIniciarJuego = false;
    }
    
    this.cartaSistema = {
      img:'../../../../assets/img/juegos/mayor menor/cartaAzul.png',
      valor : 0
    };

    this.cartaMia = {
      img:'../../../../assets/img/juegos/mayor menor/cartaAzul.png',
      valor : 0
    };
  }

  mayorGanasteToast()
  {
    this.ToastrService.success("Mayor.","Ganaste!!!");
  }

  menorGanasteToast()
  {
    this.ToastrService.success("Menor.","Ganaste!!!");
  }

  menorPerdisteToast()
  {
    this.ToastrService.error("Menor.","Perdiste!!!");
  }

  mayorPerdisteToast()
  {
    this.ToastrService.error("Mayor.","Perdiste!!!");
  }

  empateToast()
  {
    this.ToastrService.warning("Empate","Sera la Proxima!!");
  }
}
