import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Servicios/firestore.service';

@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.css']
})
export class ListadoResultadosComponent implements OnInit {

  listadoResultadosJuegosObservable: any = [];
  listadoResultadosJuegos: any = [];

  constructor(
    private FirestoreService:FirestoreService,
  ) { 

  }

  ngOnInit(): void {
    this.FirestoreService.ListaResultadosJuegos().subscribe(value => {
      this.listadoResultadosJuegosObservable = value;
      this.cargarListado();
    });
  }

  cargarListado():void{
    for (const item of this.listadoResultadosJuegosObservable) {
      this.listadoResultadosJuegos.push(item);
    }
  }

}
