import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { ErrorTailorModule } from '@ngneat/error-tailor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './Componentes/menu/menu.component';
import { ChatComponent } from './Componentes/chat/chat.component';
import { AhorcadoComponent } from './Componentes/Juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './Componentes/Juegos/mayor-menor/mayor-menor.component';
import { HttpClientModule } from '@angular/common/http';
import { PreguntadosComponent } from './Componentes/Juegos/preguntados/preguntados.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViboritaComponent } from './Componentes/Juegos/viborita/viborita.component';
import { BlackjackComponent } from './Componentes/Juegos/blackjack/blackjack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent,
    RegistroComponent,
    MenuComponent,
    ChatComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    ViboritaComponent,
    BlackjackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:2500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    BrowserAnimationsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: '*Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
