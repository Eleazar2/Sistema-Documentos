import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { MantopreventivoPage } from '../mantopreventivo/mantopreventivo.page';


@Component({
  selector: 'app-form-manto-prevetivo',
  templateUrl: './form-manto-prevetivo.page.html',
  styleUrls: ['./form-manto-prevetivo.page.scss'],
})
export class FormMantoPrevetivoPage implements OnInit {

  FormManto: FormGroup;

  constructor( private modalCtrl: ModalController, private fb: FormBuilder, private router:Router) {
    this.FormManto = this.fb.group({
          
          servicio:['',[Validators.required]],
          tipo_servicio:['',[Validators.required]],
          actividad:['',[Validators.required]],
          dia_mes:['',[Validators.required]],
          fecha_elabolacion:['',[Validators.required]],
          elabora:['',[Validators.required]],
          fecha_aprobada:['',[Validators.required]],
          aprobo:['',[Validators.required]],
          firma:['',[Validators.required]],
          estado:['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }


async  Guardar(){
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: MantopreventivoPage
    });
    modal.present();

  }

}
