import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-listverificacion',
  templateUrl: './form-listverificacion.page.html',
  styleUrls: ['./form-listverificacion.page.scss'],
})
export class FormListverificacionPage implements OnInit {

  FormList: FormGroup;


  constructor(private modalCtrl:ModalController,
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
  Generar(){
    this.router.navigate(['listverificacion']);
    this.modalCtrl.dismiss();
  }



}
