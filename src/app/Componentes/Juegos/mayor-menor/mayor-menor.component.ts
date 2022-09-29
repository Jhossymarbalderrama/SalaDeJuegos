import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Servicios/api-rest.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  cartaSistema: any;
  cartaMia: any;

  sumaCartasSistema:number = 0;
  sumaCartasMias:number = 0;

  cartas : any;
  cartasSinCartaSistema : any;

  puntosSistema: number = 0;
  puntosMios: number = 0;


  disabledMayorMenor:boolean = true;
  disabledIniciarJuego:boolean = true;

  constructor(
    private ApiRestService: ApiRestService
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
          this.puntosMios++;
        }else{
          this.puntosSistema++;
        }
        break;
    
      case 'menor':
        if(this.cartaMia.valor<this.cartaSistema.valor){
          this.puntosMios++;
        }else{
          this.puntosSistema++;
        }
        break;
    }

    setTimeout(() => {
      this.reiniciarCartas();
    }, 2000);
  }

  sacoMiCarta():void{
    let random : number = Math.floor(Math.random() * this.cartasSinCartaSistema.length);

    this.establecerValores(this.cartas[random],this.cartaMia);
  }

  reiniciar(){
    this.reiniciarCartas();

    this.puntosMios = 0;
    this.puntosSistema = 0;
  }

  reiniciarCartas(){
    this.disabledMayorMenor = true;
    this.disabledIniciarJuego = false;
    
    this.cartaSistema = {
      img:'../../../../assets/img/juegos/mayor menor/cartaAzul.png',
      valor : 0
    };

    this.cartaMia = {
      img:'../../../../assets/img/juegos/mayor menor/cartaAzul.png',
      valor : 0
    };
  }
}
