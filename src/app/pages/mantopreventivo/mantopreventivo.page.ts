import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormMantoPrevetivoPage } from '../form-manto-prevetivo/form-manto-prevetivo.page';
import { FormFirmaPage } from '../form-firma/form-firma.page';
import { async } from '@angular/core/testing';
import { FormMantenimientoPage } from '../form-mantenimiento/form-mantenimiento.page';

@Component({
  selector: 'app-mantopreventivo',
  templateUrl: './mantopreventivo.page.html',
  styleUrls: ['./mantopreventivo.page.scss'],
})
export class MantopreventivoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu1() {
    this.menu.enable(true, 'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.open('primerMenu');
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: FormMantenimientoPage
    });
    modal.present();
  }

async  onFirmarE(){
  const modal = await this.modalCtrl.create({
    component: FormFirmaPage
  });
  modal.present();
}

async  onFirmarA(){
    const modal = await this.modalCtrl.create({
      component: FormFirmaPage
    });
    modal.present();
  }

}
