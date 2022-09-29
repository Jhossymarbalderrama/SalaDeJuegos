import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Servicios/api-rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {


  pListaPersonajesAPI:any;
  pListaObjectPersonajesAPI: any = [];
  // Estructura JSON Personajes
  // character : nombre
  // image : url
  // quote

  personajeSeleccionado: any;
  personajeIMG: string = "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";  
  listOpciones:any = [];
  habilitado: boolean = false;
  opcionCorrecta: string = "";
  disabledIniciarJuego:boolean = true;
  technicalValue: number = 0;
  botonesHabilitados:boolean = true;

  constructor(
    private ApiRestService:ApiRestService,
    private Toastr:ToastrService
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

    console.log(this.pListaObjectPersonajesAPI);
    setTimeout(() => {
      this.seleccionarPersonaje();
      this.cargoListaOpciones();           
      console.log(this.listOpciones);
    }, 2500);    
    
  }

  cargarArrayList(listaObjeto:any):void{
    for (let index = 0; index < listaObjeto.length; index++) {      
      this.pListaObjectPersonajesAPI.push(listaObjeto[index]);      
    }    
  }

  // iniciarJuego(){
  //   this.reinicioJuego();
  //   this.traerPersonajesAPI();    
  // }

  compararOpcion(opcion: string){
      if(this.opcionCorrecta === opcion){
        this.esElPersonaje();
      }else{
        this.noEsElPersonaje();
      }
  }

  reinicioJuego(){     
    let object:any;
    this.botonesHabilitados = false;
    this.pListaObjectPersonajesAPI = [];  
    this.personajeSeleccionado = object;
    this.traerPersonajesAPI();   
    this.technicalDificult();
    
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

    switch (this.technicalValue) {
      case 0:
        this.personajeIMG= "../../../../assets/img/juegos/preguntados/technicalDificult.webp";
        break;
      case 1:
        this.personajeIMG= "../../../../assets/img/juegos/preguntados/technicalDificult2.gif";
        break;
      case 2:
        this.personajeIMG= "../../../../assets/img/juegos/preguntados/technicalDificult3.gif";
        break;
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
