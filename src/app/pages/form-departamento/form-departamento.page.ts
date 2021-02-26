import { Component, OnInit } from '@angular/core';
import { Depto } from '../../interfaces/depto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-form-departamento',
  templateUrl: './form-departamento.page.html',
  styleUrls: ['./form-departamento.page.scss'],
})
export class FormDepartamentoPage implements OnInit {

  myForm: FormGroup;

  dato: Depto = {
    id: 0,
    nombre_depto: ''
  }

  constructor(public dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController) {

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]]
    });

  }

  ngOnInit() {


  }

  createDepto() {
    //console.log(this.usuario);
    if (this.dato.id == 0) {

      this.dataService.postDepartamento(this.dato).subscribe(
        (res) => {
          console.log(res);
          this.presentToast('Nuevo departamento agregado con exito....');
          this.modalCtrl.dismiss();
          //this.presentToast('Nuevo usuario registrado...');
        }, err => console.error(err));

    } else if (this.dato.id >= 0) {
      this.dataService.updateDepartamento(this.dato.id, this.dato).subscribe(res => {
        console.log(res);
        this.presentToast('Dato actualizado con exito..');
        this.modalCtrl.dismiss();
      }, err => { console.error(err) });

    }



  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }



  closeModal() {
    this.modalCtrl.dismiss();
  }

}
