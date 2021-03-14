import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EspacioRevisadoI } from '../../interfaces/espacio-revisado';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-agregar-espacio',
  templateUrl: './form-agregar-espacio.page.html',
  styleUrls: ['./form-agregar-espacio.page.scss'],
})
export class FormAgregarEspacioPage implements OnInit {
  FormER: FormGroup;
  espacio_r:EspacioRevisadoI = {
    id_cu:0,
    espacio: '',
    hallazgo:'',
    atendido:''
  }

  constructor(private fb: FormBuilder, private modalCtrl:ModalController, private dataServices:DataService, private toastCtrl:ToastController) { 

    this.FormER = this.fb.group({
        espacio:['',[Validators.required]],
        hallazgo:['',[Validators.required]],
        atendido:['',[Validators.required]]
    });

   }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }

  Generar(){
      this.dataServices.crearEspacioRV(this.espacio_r).subscribe( res => {
        this.presentToast('Espacio revisado agregado con éxito...');
        this.limpiarInput();
      },err => console.log(err));
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({
      message,
      position:'middle',
      color:'success',
      duration: 2000
    });
    toast.present();
  }

  limpiarInput(){
    this.espacio_r.id_cu = 0;
    this.espacio_r.espacio = " ";
    this.espacio_r.hallazgo =" ";
    this.espacio_r.atendido = "";
  }
 
}
