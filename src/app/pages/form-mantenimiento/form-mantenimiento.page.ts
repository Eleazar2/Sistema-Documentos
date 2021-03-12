import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-mantenimiento',
  templateUrl: './form-mantenimiento.page.html',
  styleUrls: ['./form-mantenimiento.page.scss'],
})
export class FormMantenimientoPage implements OnInit {

  FormManto:FormGroup;

  constructor(private modalCtrl:ModalController, private formBuider: FormBuilder, private dataServices:DataService) {
    this.FormManto = formBuider.group({
        servicio:['',[Validators.required,Validators.pattern('[a-zA-Z]{1-9}')]],
        tipo_servicio:['',[Validators.required]],
        actividad:['',[Validators.required]],
        dia_mes:['',[Validators.required]],
    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  Guardar(){
    
    this.dataServices.crearMantoPrv_Cont(this.FormManto.value).subscribe(res=>{

    },err =>  console.error(err) );
  }

}
