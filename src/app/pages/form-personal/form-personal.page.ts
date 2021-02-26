import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { UserPersonal } from '../../interfaces/personal';
import { Depto } from '../../interfaces/depto';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-personal',
  templateUrl: './form-personal.page.html',
  styleUrls: ['./form-personal.page.scss'],
})
export class FormPersonalPage implements OnInit {

  FormP: FormGroup;
  select_depto:Depto[]=[];
  personal: UserPersonal = {
    id: 0,
    rfc: '',
    nombreP: '',
    apaterno: '',
    amaterno: '',
    departamento: 0,
    domicilio: '',
    correo: '',
    telefono: '',
    password: ''
  }

  constructor(private formbuilder: FormBuilder,
    private modalCtrl: ModalController,
    private authServices: AuthService,
    private toastCtrl: ToastController,
    private dataServices: DataService) { 
      this.FormP = this.formbuilder.group({
        rfc: ['', [Validators.required]],
        nombreP: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        apaterno: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        amaterno: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        departamento: ['', [Validators.required]],
        domicilio: ['', [Validators.required]],
        correo: ['', [Validators.required,Validators.email]],
        telefono: ['', [Validators.required]],
        password: ['', [Validators.required]]
  
      });

      this.dataServices.getAllDepartamento().subscribe( res  => {
        this.select_depto = res;
        console.log(res);
      });
    }

  ngOnInit() {
    
  }



  closeModal() {
    this.modalCtrl.dismiss();
  }

  Registar() {
    if (this.personal.id == 0) {
      this.authServices.crearPersonal(this.personal).subscribe(res => {
        this.presentToast('Nuevo personal agregado con éxito...');
        this.modalCtrl.dismiss();
      }, err => console.error(err));
    } else {
      this.authServices.updatePersonal(this.personal.id, this.personal).subscribe(res => {
        this.presentToast('Datos actualizados con éxito... ');
        this.modalCtrl.dismiss();
      }, err => console.error(err));
    }

  }

  listardepto(){
    this.dataServices.getAllDepartamento().subscribe( res  => {
      //this.select_depto = res;
      console.log(res);
    });
  }


  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  

  countryChange(event){
    const op=event.detail.value;
   this.personal.departamento = op;
  }

}
