import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FormSolicitudPage } from '../form-solicitud/form-solicitud.page';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {

  constructor(private modalCtrl:ModalController, private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu1(){
      this.menu.enable(true,'primerMenu');
      this.menu.enable(false, 'segundoMenu');
      this.menu.enable(false,'tercerMenu');
      this.menu.open('primerMenu');
    
  }


 async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: FormSolicitudPage
    });
    modal.present();
  }

}
