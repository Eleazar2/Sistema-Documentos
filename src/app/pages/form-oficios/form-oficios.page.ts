import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';

@Component({
  selector: 'app-form-oficios',
  templateUrl: './form-oficios.page.html',
  styleUrls: ['./form-oficios.page.scss'],
})
export class FormOficiosPage implements OnInit {

  FormOf: FormGroup;

  constructor( private modalCtrl: ModalController, private fb: FormBuilder) {
    this.FormOf = this.fb.group({
      numero:['',[Validators.required]],
      nombre:['',[Validators.required]],
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
