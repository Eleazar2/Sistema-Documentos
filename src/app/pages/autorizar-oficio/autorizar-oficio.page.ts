import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { OficioI } from '../../interfaces/oficio';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-autorizar-oficio',
  templateUrl: './autorizar-oficio.page.html',
  styleUrls: ['./autorizar-oficio.page.scss'],
})
export class AutorizarOficioPage implements OnInit {

  FormOf:FormGroup;
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

  constructor(private router:Router, private modalCtrl:ModalController,private fb: FormBuilder,public toastController: ToastController,private dataServices: DataService) { 
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

async  Firma(){
   /* const modal = await this.modalCtrl.create({
      component: FormMantoPrevetivoPage
    });
    modal.present();*/
  }
  vistoBueno(){
    
  }

  Generar(){
    this.dataServices.updateOficio(this.datoficio.id_o,this.datoficio).subscribe( res => {
      this.modalCtrl.dismiss();
      this.presentToast('Oficio actualizado con éxito..')
  },err => console.error(err));

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
