import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormOrdenTrabajoPage } from '../form-orden-trabajo/form-orden-trabajo.page';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.page.html',
  styleUrls: ['./ordentrabajo.page.scss'],
})
export class OrdentrabajoPage implements OnInit {

  constructor(private modalCtrl:ModalController, private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.open('primerMenu');
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: FormOrdenTrabajoPage
    });
    modal.present();
  }

}
