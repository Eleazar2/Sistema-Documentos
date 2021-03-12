import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController,ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';
import { FormFirmaPage } from '../form-firma/form-firma.page';
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
    firma:'',
    personal_id: 0

  }
  

  constructor( private modalCtrl: ModalController,private router: Router,public toastController: ToastController,  private dataServices: DataService,private fb: FormBuilder,private alertCotrl: AlertController) {
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
      estado:['',[Validators.required]],
      firma:['',[Validators.required]],
      personal_id:['',[Validators.required]]
      
    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  
    async Generar(){

      //console.log(this.usuario);
      const toast = await this.toastController.create({
        message: 'Nuevo usuario agregado.',
        duration: 2000
      });
      this.dataServices.crearOficio(this.datoficio).subscribe(
        (res)=>{
        console.log(res);
      this.closeModal();
      });
      toast.present();
  
    }
  
  
   
}
