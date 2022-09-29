import { Component, OnInit } from '@angular/core';
import { object } from 'rxfire/database';
import { ApiRestService } from 'src/app/Servicios/api-rest.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
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
  pListArrayPalabrasApi:any =[];

  constructor(
    public ApiRestService: ApiRestService
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
        if(this.fallos == 6)
        {
          this.disabled = true;
          console.log("Perdiste");
        }  
     }
     else
     {
       if(this.acertados === this.palabra.length)
       {
        this.disabled = true;
        console.log("Ganaste!!");
       }
     }
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

  reiniciar():void{    
      this.generandoPalabra = "";
      this.fallos = 0;
      this.acertados = 0;
      this.palabraAzar(); 
      this.disabled = false;  
  }
}
