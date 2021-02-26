import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-listverificacion',
  templateUrl: './form-listverificacion.page.html',
  styleUrls: ['./form-listverificacion.page.scss'],
})
export class FormListverificacionPage implements OnInit {

  FormList: FormGroup;


  constructor(private modalCtrl:ModalController,
              private fb: FormBuilder
              ) {
                this.FormList = this.fb.group({
                  depto_responsable:['',[Validators.required]],
                  area_verificada:['',[Validators.required]],
                  fecha_realizada:['',[Validators.required]],
                  espacio:['',[Validators.required]],
                  hallazgos:['',[Validators.required]],
                  atendido:['',[Validators.required]],
                  firma:['',[Validators.required]],
                  estado:['',[Validators.required]]
                })

  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
  Generar(){

  }



}
