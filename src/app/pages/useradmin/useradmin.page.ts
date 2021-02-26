import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { UserAdmin } from '../../interfaces/user-admin';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.page.html',
  styleUrls: ['./useradmin.page.scss'],
})
export class UseradminPage implements OnInit {
  
  FormAdmin:FormGroup;
  useradmin: UserAdmin = {
    id: 0,
    nombre:'',
    apaterno:'',
    amaterno:'',
    domicilio:'',
    telefono: '',
    correo:'',
    password:''
  }

  constructor(private authServices: AuthService,
              private formbuilder: FormBuilder, 
              private modalCtrl: ModalController,
              private toastCtrl: ToastController) { 
    this.FormAdmin = this.formbuilder.group({
      nombre:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      apaterno:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      amaterno:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      domicilio:['',[Validators.required]],
      telefono:['',[Validators.required]],
      correo:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]

    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  Registrar(){
    if (this.useradmin.id == 0) {
      this.authServices.crearUserAdmin(this.useradmin).subscribe(res => {
        this.presentToast('Nuevo personal agregado con éxito...');
        this.modalCtrl.dismiss();
      }, err => console.error(err));
    } else {
      this.authServices.updataUserAdmin(this.useradmin.id, this.useradmin).subscribe(res => {
        this.presentToast('Datos actualizados con éxito... ');
        this.modalCtrl.dismiss();
      }, err => console.error(err));
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

}
