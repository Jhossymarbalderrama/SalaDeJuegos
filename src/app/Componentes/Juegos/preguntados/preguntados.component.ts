import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Servicios/api-rest.service';
import { ToastrService } from 'ngx-toastr';

import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { AuthService } from 'src/app/Servicios/auth.service';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {


  pListaPersonajesAPI:any;
  pListaObjectPersonajesAPI: any = [];

  personajeSeleccionado: any;
  personajeIMG: string = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";  
  listOpciones:any = [];
  habilitado: boolean = false;
  opcionCorrecta: string = "";
  disabledIniciarJuego:boolean = true;
  technicalValue: number = 0;
  botonesHabilitados:boolean = true;

  problemasTecnicosIMG:string = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";
  fallosTotalesDelJuego: number = 3;
  fallosGame: number = 0;
  puntosGame: number = 0;
  puntosJuego: number = 75;

  constructor(
    private ApiRestService:ApiRestService,
    private Toastr:ToastrService,
    private FirestoreService: FirestoreService,
    private AuthService: AuthService
    ) { }

  ngOnInit(): void {
    this.traerPersonajesAPI();
  }

  traerPersonajesAPI():void{  
    this.ApiRestService.setURL('https://thesimpsonsquoteapi.glitch.me/quotes?count=4');
    this.ApiRestService.callAPI().subscribe(personaje =>{
        this.pListaPersonajesAPI = personaje;
        this.cargarArrayList(this.pListaPersonajesAPI);
    })
    setTimeout(() => {
      this.seleccionarPersonaje();
      this.cargoListaOpciones();           
    }, 2500);    
    
  }

  cargarArrayList(listaObjeto:any):void{
    for (let index = 0; index < listaObjeto.length; index++) {      
      this.pListaObjectPersonajesAPI.push(listaObjeto[index]);      
    }    
  }


  compararOpcion(opcion: string){
      if(this.opcionCorrecta == opcion){
        this.esElPersonaje();      
        this.puntosGame += this.puntosJuego;
      }else{
        this.noEsElPersonaje();
        this.fallosGame++;

        if(this.fallosGame == this.fallosTotalesDelJuego){
          this.registroPuntos();
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
      juego: "preguntados"
    }

    console.log(date);
    this.FirestoreService.AltaResultadoJuego(date);
  }

  reinicioPartida(){
    let object:any;
    this.pListaObjectPersonajesAPI = [];  
    this.personajeSeleccionado = object;
    this.personajeIMG = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";  
    this.listOpciones = [];
    this.habilitado = false;
    this.opcionCorrecta = "";
    this.disabledIniciarJuego = true;
    this.technicalValue = 0;
    this.botonesHabilitados = true;
    this.problemasTecnicosIMG = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";
    this.fallosGame = 0;
    this.puntosGame = 0;
    }


  reinicioJuego(){     
    let object:any;

    this.technicalDificult();
    this.pListaObjectPersonajesAPI = [];  
    this.personajeSeleccionado = object;
    this.traerPersonajesAPI(); 
    
    this.listOpciones = [];
    this.habilitado = false; 
    this.botonesHabilitados = true; 

    
  }
  
  technicalDificult(){
    if(this.technicalValue != 2){
      this.technicalValue++;
    }else{
      this.technicalValue = 0;
    }

    if(this.fallosGame != this.fallosTotalesDelJuego){
      switch (this.technicalValue) {
        case 0:
          this.personajeIMG = "../../../../assets/img/juegos/preguntados/technicalDificult.webp";
          break;
        case 1:
          this.personajeIMG = "../../../../assets/img/juegos/preguntados/technicalDificult2.gif";
          break;
        case 2:
          this.personajeIMG = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";
          break;
      }
    }else{
      let random : number = Math.floor(Math.random() * 2);
      switch (random) {
        case 0:
          this.problemasTecnicosIMG = "../../../../assets/img/juegos/preguntados/technicalDificult.webp";
          break;
        case 1:
          this.problemasTecnicosIMG = "../../../../assets/img/juegos/preguntados/technicalDificult2.gif";
          break;
        case 2:
          this.problemasTecnicosIMG = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";
          break;
      }
    }
  }

  cargoListaOpciones(){
    for (let index = 0; index < this.pListaObjectPersonajesAPI.length; index++) {      
      this.listOpciones.push(this.pListaObjectPersonajesAPI[index].character);      
    } 
  }

  seleccionarPersonaje(){
    let random : number = Math.floor(Math.random() * this.pListaObjectPersonajesAPI.length);
    
    setTimeout(() => {
      this.personajeSeleccionado = this.pListaObjectPersonajesAPI[random];
      this.habilitado = true;
      this.personajeIMG = this.personajeSeleccionado.image;
      this.opcionCorrecta = this.personajeSeleccionado.character;
    }, 500);
    
    setTimeout(() => {
      this.botonesHabilitados = false; 
    }, 500);
    
  }


  esElPersonaje()
  {
    this.Toastr.success("Bien el personaje es "+this.opcionCorrecta,"Has Ganado");
    this.reinicioJuego();
  }

  noEsElPersonaje()
  {
    this.Toastr.error("Te equivocaste, el personaje era "+this.opcionCorrecta,"Hay tabla");
    this.reinicioJuego();
  }
}
