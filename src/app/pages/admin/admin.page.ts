import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private menu: MenuController, private modalCtrl: ModalController,private authServices: AuthService, private router: Router) { }

  ngOnInit() {
  }


  openMenu2(){
    this.menu.enable(true, 'segundoMenu');
    this.menu.enable(false,'primerMenu');
    this.menu.open('segundoMenu');
  }


  onCerrarSesion(){
    this.authServices.logout();
    this.router.navigate(['login-admin'])
    
  }


 

}
