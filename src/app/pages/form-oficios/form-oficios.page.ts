import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';
import { FormFirmaPage } from '../form-firma/form-firma.page';
import { OficioI } from '../../interfaces/oficio';

@Component({
  selector: 'app-form-oficios',
  templateUrl: './form-oficios.page.html',
  styleUrls: ['./form-oficios.page.scss'],
})
export class FormOficiosPage implements OnInit {

  FormOf: FormGroup;
  datoficio: OficioI = {
    numero: null,
    nombre_o: '',
    fecha: '',
    oficio: '',
    asunto: '',
    nombre_dirigido: '',
    depto_dirigido: '',
    cuerpo: '',
    remitente_depto: '',
    visto_bueno: '',
    estado: '',
    personal_id: 0

  }

  constructor( private modalCtrl: ModalController, private fb: FormBuilder) {
    this.FormOf = this.fb.group({
      numero:['',[Validators.required]],
      nombre_o:['',[Validators.required]],
      fecha:['',[Validators.required]],
      oficio:['',[Validators.required]],
      asunto:['',[Validators.required]],
      nombre_dirigido:['',[Validators.required]],
      depto_dirigido:['',[Validators.required]],
      cuerpo:['',[Validators.required]],
      remitente_depto:['',[Validators.required]],
      visto_bueno:['',[Validators.required]],
      estado:['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  Generar(){
    
  }


}
