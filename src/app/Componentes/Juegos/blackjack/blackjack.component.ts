import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Servicios/api-rest.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private ApiRestService: ApiRestService,
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

    if(this.sumaCartasSistema>=21){
      this.sistemaCartas();
    }
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

    if(this.sumaCartasMias>21){
      this.deshabilitoBotones();
      this.perdisteToast();
    }else if(this.sumaCartasMias == 21){
      this.deshabilitoBotones();
      this.blackJackToast();
      this.sistemaCartas();
    }

    this.imagenesCartasMias.push(this.cartaMia.img);
  }

  deshabilitoBotones(){
    this.meQuedo = true;
  }

  quedarme(){
    this.deshabilitoBotones();  
    this.meQuedoToast();
    
    setTimeout(() => {
      if(this.sumaCartasSistema<21 &&
        this.sumaCartasSistema<this.sumaCartasMias
      ){
          this.sistemaCartas();
      }else if(this.sumaCartasSistema<21 &&
        this.sumaCartasSistema>this.sumaCartasMias){
          this.perdisteToast();
      }
    }, 2000);
  }

  sistemaCartas(){
    if(this.sumaCartasSistema < this.sumaCartasMias){
      this.pidoCartaParaSistema();
        if(this.sumaCartasSistema>this.sumaCartasMias &&
          this.sumaCartasSistema<=21
        ){
          this.sistemaSeQueda = true;
          this.perdisteToast();
        }else if(this.sumaCartasSistema==21 &&
            this.sumaCartasMias==21
          ){
            this.sistemaSeQueda = true;
            this.empateToast();
        }else{
          this.pidoCartaParaSistema();
          this.comparacionCartasSistema();
        }
    }else if(this.sumaCartasSistema == this.sumaCartasMias
      && this.sumaCartasSistema == 21){
          this.sistemaSeQueda = true;  
          this.empateToast();  
    }else if(this.sumaCartasSistema > this.sumaCartasMias &&
      this.sumaCartasSistema>21){       
        this.sistemaSeQueda = true;
        this.perdisteToast();
    }
  }

  comparacionCartasSistema(){
    if(this.sumaCartasSistema>this.sumaCartasMias ||
      this.sumaCartasSistema<=21
    ){
      this.sistemaSeQueda = true;
      this.perdisteToast();
    }else if(this.sumaCartasSistema==21 &&
        this.sumaCartasMias==21
      ){
        this.sistemaSeQueda = true;
        this.empateToast();
    }else{
      this.sistemaSeQueda = true;
      this.ganasteToast();
    }
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

    this.puntosMios = 0;
    this.puntosSistema = 0;

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
