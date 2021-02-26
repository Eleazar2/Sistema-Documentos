import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserAdmin } from '../../interfaces/user-admin';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  Formlogin: FormGroup;
  datos: UserAdmin ={
    correo: '',
    password: ''
  } 

  constructor(private formbuilder: FormBuilder,private authServices:AuthService, private router:Router,private menuCtrl: MenuController) {
    this.Formlogin = this.formbuilder.group({
      correo:['',[Validators.required]],
      password:['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  openMenus(){
    this.menuCtrl.enable(false,'primerMenu');
    this.menuCtrl.enable(false, 'segundoMenu');
    this.menuCtrl.enable(false,'tercerMenu');
  }


  iniciarSesion(){
    this.authServices.singinA(this.datos).subscribe( res => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['admin'])
    }, err => console.error(err));

  }

}
