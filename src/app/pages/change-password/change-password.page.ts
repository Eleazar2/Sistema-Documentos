import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserPersonal } from '../../interfaces/personal';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  formchange_pass:FormGroup;
  

  constructor(private authServices: AuthService, private formfuilder:FormBuilder, private toastCtrl:ToastController, private router:Router) {
          this.formchange_pass = formfuilder.group({
              password:['',[Validators.required]]
          });
   }

  ngOnInit() {
  }
/*
  cambiarPassword(){

    this.authServices.cambiarPassword(this.formchange_pass.value).subscribe(res=>{
      this.presentToast('Tu contraseña ha sido cambiado..');
      this.router.navigate(['inicio']);
    }, err => console.error(err));
  }*/

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      mode:'ios',
      color: 'success',
      position:'top',
      duration: 2000
    });
    toast.present();
  }

}
