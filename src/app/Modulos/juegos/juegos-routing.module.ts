import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from 'src/app/Componentes/Juegos/ahorcado/ahorcado.component';
import { BlackjackComponent } from 'src/app/Componentes/Juegos/blackjack/blackjack.component';
import { ListadoResultadosComponent } from 'src/app/Componentes/Juegos/listado-resultados/listado-resultados.component';
import { MayorMenorComponent } from 'src/app/Componentes/Juegos/mayor-menor/mayor-menor.component';

import { PreguntadosComponent } from 'src/app/Componentes/Juegos/preguntados/preguntados.component';
import { JuegosComponent } from './juegos.component';

const routes: Routes = [
  {path: '', children:[
    {path:'ahorcado', component: AhorcadoComponent },
    {path:'mayor-menor', component: MayorMenorComponent },
    {path:'preguntados', component: PreguntadosComponent },
    {path:'black-jack', component: BlackjackComponent},
    {path:'listado', component: ListadoResultadosComponent}
    // {path:'', component: },
    // {path:'', component: },    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
