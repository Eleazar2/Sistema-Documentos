import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { FormFirmaPage } from '../form-firma/form-firma.page';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.page.html',
  styleUrls: ['./form-solicitud.page.scss'],
})
export class FormSolicitudPage implements OnInit {

  FormSolicitud: FormGroup;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {

    this.FormSolicitud = this.fb.group({

    });

  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  Generar() {

  }

  async onFirmar() {
    const modal = await this.modalCtrl.create({
      component: FormFirmaPage
    });
    modal.present();
  }

}
