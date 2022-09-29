import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './Componentes/chat/chat.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './Componentes/registro/registro.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'juegos', loadChildren: () => import('./Modulos/juegos/juegos.module').then(m => m.JuegosModule) },
  {path: 'chat', component:ChatComponent},
  {path: 'quienSoy', component:QuienSoyComponent},  
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
