import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPersonal } from '../../interfaces/personal';
import { AuthService } from '../../services/auth.service';
import { Depto } from '../../interfaces/depto';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Formlogin:FormGroup;

  user: UserPersonal={
    correo:'',
    password: ''
  };
  departamento: Depto;



  constructor(public authServices: AuthService,public alertCtrl: AlertController, 
              public menuCtrl: MenuController, 
              public router: Router,
              private formbuilder: FormBuilder) {

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


  public openPage(valor: string){
    //console.log("valor: " + valor);
    this.router.navigate(['/'+valor]);

    }

 


  IniciarSesion(){
    this.authServices.singinP(this.user).subscribe( res => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['inicio']);
    },err => console.error(err));
  }


  
}
