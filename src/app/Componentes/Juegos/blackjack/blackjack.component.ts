import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Servicios/api-rest.service';
import { ToastrService } from 'ngx-toastr';

import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Cartas } from './cards/cartas';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  cartaSistema: any;
  cartaMia: any;

  cartas : any;
  cartasSinCartaSistema : any;
  

  sumaCartasSistema:number = 0;
  sumaCartasMias:number = 0;

  imagenesCartasMias:any = [];
  imagenesCartasSistema:any = [];

  puntosSistema: number = 0;
  puntosMios: number = 0;
  
  sistemaSeQueda: boolean = true;
  meQuedo:boolean = true;
  inicioJuego:boolean = false;
  juegoTerminado: boolean = false;

  mazoLocal:any;

  constructor(
    private ApiRestService: ApiRestService,
    private ToastrService:ToastrService,
    private FirestoreService: FirestoreService,
    private AuthService: AuthService
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
  
      setTimeout(() => {
        if(this.cartas == undefined || this.cartas.length == 0){
          this.mazoLocal = new Cartas();
          this.cartas = this.mazoLocal.mazoLocal;

          console.log(this.cartas);
        }
      }, 1000);
      
      
  }

  iniciarJuego(){
    this.inicioJuego = true;
    this.meQuedo = false;

    //Saco carta para mi Primera vez
    this.sacoMiCarta(this.cartas);
    this.sacoCartaQueSaque(this.cartaMia);
    this.sumaCartasMias += this.cartaMia.valor;
    this.imagenesCartasMias.push(this.cartaMia.img);

    //Saco carta para el sistema
    this.pidoCartaParaSistema();

    //Saco carta para mi
    this.pidoCarta();

    //Saco carta para el sistema
    this.pidoCartaParaSistema();

    // if(this.sumaCartasMias>21){
    //   this.deshabilitoBotones();
    // }
  }

  pidoCartaParaSistema(){
    //Saco carta para el sistema
    this.sacoSistemaCarta(this.cartasSinCartaSistema);
    this.sacoCartaQueSaque(this.cartaSistema);
    this.sumaCartasSistema += this.cartaSistema.valor;
    this.imagenesCartasSistema.push(this.cartaSistema.img);
  }

  pidoCarta(){
    //Saco carta para mi
    this.sacoMiCarta(this.cartasSinCartaSistema);
    this.sacoCartaQueSaque(this.cartaMia);  
    this.sumaCartasMias += this.cartaMia.valor;

    this.imagenesCartasMias.push(this.cartaMia.img);    
  }

  deshabilitoBotones(){
    this.meQuedo = true;
  }

  quedarme(){
    this.deshabilitoBotones();  
    this.meQuedoToast();
    
    //BLACK-JACK
    if(this.sumaCartasMias == 21){
      this.blackJackToast();
    }

    setTimeout(() => {
      this.sistemaCartas();      
    }, 2000);
  }

  sistemaCartas(){
    if(this.sumaCartasSistema < this.sumaCartasMias && this.sumaCartasMias <= 21){
      // console.log("IF 1");
        this.pidoCartaParaSistema();

        if(this.sumaCartasSistema>this.sumaCartasMias && this.sumaCartasSistema<=21){
          // console.log("IF 1.1");
          this.sistemaSeQueda = true;
          // this.perdisteToast();
          this.comparacionCartasSistema();
        }else if(this.sumaCartasSistema==21 && this.sumaCartasMias==21){
          // console.log("IF 1.2");
            this.sistemaSeQueda = true;
            // this.empateToast();
            this.comparacionCartasSistema();
        }else if(this.sumaCartasSistema > 21 && this.sumaCartasSistema>this.sumaCartasMias){
          // console.log("IF 1.3");
          this.comparacionCartasSistema();
        }else if(this.sumaCartasMias<=21 && this.sumaCartasMias > this.sumaCartasSistema && this.sumaCartasSistema<21){
          // console.log("IF 1.4");
          this.comparacionCartasSistema();
        }
    }else if(this.sumaCartasSistema == this.sumaCartasMias
      && this.sumaCartasSistema == 21){
        // console.log("IF 2");
          this.sistemaSeQueda = true;  
          // this.empateToast(); 
          this.comparacionCartasSistema(); 
    }else if(this.sumaCartasSistema > this.sumaCartasMias &&
      this.sumaCartasSistema>21){      
        // console.log("IF 3"); 
        this.sistemaSeQueda = true;
        // this.perdisteToast();
        this.comparacionCartasSistema();
    }else if(this.sumaCartasSistema > this.sumaCartasMias &&
      this.sumaCartasSistema<21){    
        // console.log("IF 4");   
        this.sistemaSeQueda = true;
        // this.perdisteToast();
        this.comparacionCartasSistema();
    }
    else if(this.sumaCartasSistema >21 &&
      this.sumaCartasMias>21){      
        console.log("IF 5"); 
        this.sistemaSeQueda = true;
        // this.perdisteToast();
        this.comparacionCartasSistema();
    }else if(this.sumaCartasSistema<=21 && this.sumaCartasSistema < this.sumaCartasMias && this.sumaCartasMias >21){
      console.log("IF 6");
      this.sistemaSeQueda = true;
      this.comparacionCartasSistema();
    }
  }

  comparacionCartasSistema(){
    
    //Sistema en base mis suma de puntos
    if(this.sumaCartasSistema>this.sumaCartasMias && this.sumaCartasSistema<21){
      this.perdisteToast();//sis: 18 - yo:17
      this.manoPerdida();
    }else if(this.sumaCartasSistema>21 && this.sumaCartasMias>21){
      this.empateToast();//sis: 22 - yo:22
    }else if(this.sumaCartasSistema>21 && this.sumaCartasMias<=21){
      this.ganasteToast();//sis: 22 - yo:17      
      this.puntosMios +=50;
    }else if(this.sumaCartasMias<this.sumaCartasSistema && this.sumaCartasMias<21 &&this.sumaCartasSistema>this.sumaCartasMias){
      this.perdisteToast();
      this.manoPerdida();
    }else if(this.sumaCartasMias==this.sumaCartasSistema){
      this.empateToast();//sis: 20 - yo:20
    }else if(this.sumaCartasMias > this.sumaCartasSistema && this.sumaCartasMias <= 21 && this.sumaCartasSistema<21){
      this.ganasteToast();//sis: 18 - yo:20      
      this.puntosMios +=50;
    }else if(this.sumaCartasSistema<=21 && this.sumaCartasSistema < this.sumaCartasMias && this.sumaCartasMias>21){
      this.perdisteToast();
      this.manoPerdida();
    }

    setTimeout(() => {
      if(this.puntosSistema != 3){
        this.reiniciar();
    }
    }, 2500);
  }

  manoPerdida(){
    this.puntosSistema++;

    if(this.puntosSistema == 3){
      this.juegoTerminado = true;
      this.registroPuntos();

      //this.reinicioJuego();
    }
  }


  reinicioJuego(){

    this.reiniciarCartas();
    this.cartasSinCartaSistema = [];
    this.sumaCartasSistema = 0;
    this.sumaCartasMias = 0;
  
    this.imagenesCartasMias = [];
    this.imagenesCartasSistema = [];
  
    this.puntosSistema = 0;
    this.puntosMios = 0;
    
    this.sistemaSeQueda = true;
    this.meQuedo = true;
    this.inicioJuego = false;
    this.juegoTerminado = false;
  }

  registroPuntos():void{
    let formateador = new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'medium' });
    let fecha = new Date();
    let fechaFormateada = formateador.format(fecha);

    let date: any = {
      usuario: this.AuthService.usuarioLogueado,
      fecha: fechaFormateada,
      puntaje: this.puntosMios,
      juego: "black-jack"
    }

    this.FirestoreService.AltaResultadoJuego(date);
  }

  sacoCartaQueSaque(cartaSacada: any){
    this.cartasSinCartaSistema = this.cartas.filter((carta:any) => carta != cartaSacada);
  }


  sacoSistemaCarta(mazo: any):void{
    let random : number = Math.floor(Math.random() * mazo.length);
    this.establecerValores(mazo[random],this.cartaSistema);
  }

  sacoMiCarta(mazo: any):void{
    let random : number = Math.floor(Math.random() * mazo.length);
    this.establecerValores(mazo[random],this.cartaMia);
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

  reiniciar(){
    this.reiniciarCartas();


    this.sumaCartasMias = 0;
    this.sumaCartasSistema = 0;

    this.imagenesCartasMias = [];
    this.imagenesCartasSistema = [];

    this.inicioJuego = false;
  }

  reiniciarCartas(){
    this.cartaSistema = {
      img:'../../../../assets/img/juegos/mayor menor/cartaAzul.png',
      valor : 0
    };

    this.cartaMia = {
      img:'../../../../assets/img/juegos/mayor menor/cartaAzul.png',
      valor : 0
    };
  }

  ganasteToast()
  {
    this.ToastrService.success("Felicidades." ,"Has Ganado!!!");
  }

  perdisteToast()
  {
    this.ToastrService.error("Sera la proxima.","Perdiste!!!");
  }

  blackJackToast()
  {
    this.ToastrService.warning("Llegaste a 21.","Black Jack!!!");
  }

  meQuedoToast()
  {
    this.ToastrService.warning("Llegaste a "+this.sumaCartasMias,"Espera al sistema...");
  }

  empateToast()
  {
    this.ToastrService.warning("Empate","Sera la Proxima!!");
  }
}
