import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ListaVerifcacionI } from '../../interfaces/lista-verificacion';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-form-listverificacion',
  templateUrl: './form-listverificacion.page.html',
  styleUrls: ['./form-listverificacion.page.scss'],
})
export class FormListverificacionPage implements OnInit {

  FormList: FormGroup;
  
  datolista: ListaVerifcacionI = {
    nombre_lf: null,
    depto_responsable: '',
    area_verificada: '',
    fecha_realizada: '',
    nombre_rec: '',
    firma_rec: '',
    nombre_area: '',
    firma_area: '', 
    estado: '',
    personal_id: 0

  }
  

  constructor(private modalCtrl:ModalController,public toastController: ToastController,private dataServices: DataService,
              private fb: FormBuilder,
              private router: Router
              ) {
                this.FormList = this.fb.group({
                  nombre_lf:['',[Validators.required]],
                  depto_responsable:['',[Validators.required]],
                  area_verificada:['',[Validators.required]],
                  fecha_realizada:['',[Validators.required]],
                })

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
    this.dataServices.crearLista_V(this.datolista).subscribe(
      (res)=>{
      console.log(res);
    });
    toast.present();
    this.router.navigate(['lista']);
    this.modalCtrl.dismiss();
  }



}
