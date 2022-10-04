import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/Servicios/firestore.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [NgbRatingConfig]
})
export class EncuestaComponent implements OnInit {

  public formEncuesta: FormGroup;

  constructor(
    config: NgbRatingConfig,
    private FirestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private ToastrService:ToastrService,
    private Router:Router
    ) { 
    config.max = 5;
    config.readonly = false;  
    
    this.formEncuesta = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.minLength(2)]],
      apellido: ['',[Validators.required,Validators.minLength(2)]],
      edad: ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      pregunta_1: ['',[Validators.required]],
      pregunta_2: ['',[Validators.required]],
      pregunta_3: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  enviar(){
    if(this.formEncuesta.valid){
      let formulario = {
        nombre: this.formEncuesta.get('nombre')?.value,
        apellido: this.formEncuesta.get('apellido')?.value,
        edad: this.formEncuesta.get('edad')?.value,
        pregunta_1: this.formEncuesta.get('pregunta_1')?.value,
        pregunta_2: this.formEncuesta.get('pregunta_2')?.value,
        pregunta_3: this.formEncuesta.get('pregunta_3')?.value     
      };

      this.formularioEnviado();  
      this.Router.navigateByUrl("/home");      
      this.FirestoreService.AltaEncuesta(formulario);      
    }
  }

  formularioEnviado()
  {
    this.ToastrService.success("Encuesta enviada correctamente","Muchas Gracias!!!");
  }
}
