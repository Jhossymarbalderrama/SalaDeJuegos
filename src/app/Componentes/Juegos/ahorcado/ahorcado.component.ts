import { Component, OnInit } from '@angular/core';
import { object } from 'rxfire/database';

import { ApiRestService } from 'src/app/Servicios/api-rest.service';
import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  puntosGame: number = 0;

  palabras:any =[];
  generandoPalabra: string = "";
  teclado : string[] = ["Q","W","E","R","T","Y","U","I","O","P",
                        "A","S","D","F","G","H","J","K","L","Ñ",
                             "Z","X","C","V","B","N","M"];; 
  palabra : string = "";
  disabled : boolean = false;
  fallos: number = 0;
  acertados : number = 0;

  juegoActivo: boolean = false;


  // Pruebas API
  pListaPalabrasAPI:any;  
  pListArrayPalabrasApi:any =[];//ARRAY Q UTILIZO PARA AHORCADO

  pListArrayPalabrasLocal: any = ["PROGRAMA","WEB","PROGRAMADOR","ANGULAR","FIREBASE",
                                  "JAVASCRIPT","TYPESCRIPT","PHOTOSHOP","HERENCIA","VARIABLE",
                                  "ATRIBUTO","POLIMORFISMO","INSTANCIA","SERVICIO","MODULO","COMPONENTE",
                                  "ROUTING","JUEGOS","CHAT","API","CLASE","INTERFACE"];

  imagesAhorcado: string = "../../../../assets/img/juegos/ahorcado/base.png";

  constructor(
    public ApiRestService: ApiRestService,
    private FirestoreService: FirestoreService,
    private AuthService: AuthService
  ){ 
    this.fallos = 0;
    this.acertados = 0;
    this.espaciosPalabra();

    setTimeout(() => {
      this.palabraAzar();    
    }, 2000);
  }

  cargarArrayList(listaObjeto:any):void{
      for (let index = 0; index < listaObjeto.length; index++) {
        let valor:string =  listaObjeto[index].Word.toUpperCase();
        this.pListArrayPalabrasApi.push(valor);
        // this.palabras.push(valor);
        // console.log(this.pListArrayPalabrasApi);
      }
  }

  ngOnInit(): void {   
    this.ApiRestService.setURL('https://palabras-aleatorias-public-api.herokuapp.com/palabras-aleatorias?Word=palabras');

    this.ApiRestService.callAPI().subscribe(value =>{
      this.pListaPalabrasAPI = value;
  
      this.cargarArrayList(value.body[0].Related);
    });     

    console.log(this.pListArrayPalabrasApi);
    if(this.pListArrayPalabrasApi.length == 0 || this.pListArrayPalabrasApi == undefined){
      this.pListArrayPalabrasApi = this.pListArrayPalabrasLocal;
    }
  }


  palabraAzar():void{
    //console.log(this.palabras);
    let random : number = Math.floor(Math.random() * this.pListArrayPalabrasApi.length);
    this.palabra = this.pListArrayPalabrasApi[random];

    this.espaciosPalabra();
  }

  espaciosPalabra():void
  {
    for(let i = 0;i < this.palabra.length; i++)
    {
      this.generandoPalabra += "_";
    }
  }

  clickTecla(letra: string):void{
    if(!this.busqueda(letra))
     {
       this.fallos++;
       
       
       this.cambiarImgen(this.fallos);
        if(this.fallos == 6)
        {
          this.disabled = true;

          //Si pierde una vez cargo log con los puntos totales acumulados del jugador
          this.registroPuntos();
        }
     }
     else
     {
       if(this.acertados === this.palabra.length)
       {
        this.disabled = true;
        // Sumo Puntos cada vez q gane
        this.puntosGame += 30;
       }
     }
  }


  registroPuntos():void{
    let formateador = new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'medium' });
    let fecha = new Date();
    let fechaFormateada = formateador.format(fecha);

    let date: any = {
      usuario: this.AuthService.usuarioLogueado,
      fecha: fechaFormateada,
      puntaje: this.puntosGame,
      juego: "ahorcado"
    }

    this.FirestoreService.AltaResultadoJuego(date);
  }


  busqueda(letra : string) : boolean
  {
    let letraEncontrada : boolean = false;

    for(let i = 0; i < this.palabra.length; i++)
    {
      if(this.palabra[i] === letra)
      {
        letraEncontrada = true;

        this.generandoPalabra = this.generandoPalabra.substring(0,i) 
        + letra + 
        this.generandoPalabra.substring(i + 1);

        this.acertados++;
      }
    }
    return letraEncontrada;
  }

  cambiarImgen(img:number):void{
    switch (img) {
      case 1:
        this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/cabeza.png";
      break;
      case 2:
        this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/cuerpo.png";
      break;
      case 3:
        this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/brazo1.png";
      break;
      case 4:
        this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/brazo2.png";
      break;
      case 5:
        this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/pie1.png";
      break;
      case 6:
        this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/pie2.png";
      break;
    }
  }


  reiniciar():void{    
      if(this.fallos == 6){
        this.puntosGame = 0;
      }

      this.generandoPalabra = "";
      this.fallos = 0;
      this.acertados = 0;
      this.palabraAzar(); 
      this.disabled = false;  

      this.imagesAhorcado = "../../../../assets/img/juegos/ahorcado/base.png";
  }
}
