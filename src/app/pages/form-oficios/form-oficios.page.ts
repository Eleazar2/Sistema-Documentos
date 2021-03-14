import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { OficioI } from '../../interfaces/oficio';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-oficios',
  templateUrl: './form-oficios.page.html',
  styleUrls: ['./form-oficios.page.scss'],
})
export class FormOficiosPage implements OnInit {

  FormOf: FormGroup;
  datoficio: OficioI = {
    id_o:0,
    numero:0,
    nombre_o: '',
    fecha: '',
    oficio: '',
    asunto: '',
    nombre_dirigido: '',
    depto_dirigido: '',
    cuerpo: '',
    remitente_depto: '',
    visto_bueno: '',
    firma: '',
    estado: '',
    personal_id: 0

  }


  constructor(private modalCtrl: ModalController, private router: Router, public toastController: ToastController, private dataServices: DataService, private fb: FormBuilder, private alertCotrl: AlertController) {
    this.FormOf = this.fb.group({
      numero: ['', [Validators.required]],
      nombre_o: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      oficio: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
      nombre_dirigido: ['', [Validators.required]],
      depto_dirigido: ['', [Validators.required]],
      cuerpo: ['', [Validators.required]],
      remitente_depto: ['', [Validators.required]],
      visto_bueno: [''],
      firma: [''],
      estado: [''],
      personal_id: ['']

    });
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }


 Generar() {

    if (this.datoficio.id_o == 0) {

      this.dataServices.crearOficio(this.datoficio).subscribe( 
        res => {
          this.closeModal();
          this.presentToast('Nuevo oficio creado con éxito..');
      },err =>console.error(err));

    }else  {
      this.dataServices.updateOficio(this.datoficio.id_o,this.datoficio).subscribe( res => {
        this.closeModal();
        this.presentToast('Oficio actualizado con éxito..')
    },err => console.error(err));
    } 
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }



}
