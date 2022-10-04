import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './Componentes/chat/chat.component';
import { EncuestaComponent } from './Componentes/encuesta/encuesta.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { GuardGuard } from './Guard/guard.guard';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent, canActivate: [GuardGuard]},
  {path: 'juegos', loadChildren: () => import('./Modulos/juegos/juegos.module').then(m => m.JuegosModule) , canActivate: [GuardGuard]},
  {path: 'chat', component:ChatComponent, canActivate: [GuardGuard]},
  {path: 'quienSoy', component:QuienSoyComponent, canActivate: [GuardGuard]},
  {path: 'encuesta', component: EncuestaComponent, canActivate: [GuardGuard]}, 
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
