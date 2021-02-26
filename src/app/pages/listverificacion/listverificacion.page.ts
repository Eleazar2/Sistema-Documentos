import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormListverificacionPage } from '../form-listverificacion/form-listverificacion.page';

@Component({
  selector: 'app-listverificacion',
  templateUrl: './listverificacion.page.html',
  styleUrls: ['./listverificacion.page.scss'],
})
export class ListverificacionPage implements OnInit {

  constructor( private modalCtrl: ModalController, private menu: MenuController) { }

  ngOnInit() {
  }

 
    openMenu1(){
      this.menu.enable(true,'primerMenu');
      this.menu.enable(false, 'segundoMenu');
      this.menu.open('primerMenu');
    }
  


 async ModalVerificacion(){
    const modal = await this.modalCtrl.create({
      component: FormListverificacionPage
    });
    modal.present();
  }
}
