import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { FormMantoPrevetivoPage } from '../form-manto-prevetivo/form-manto-prevetivo.page';
import { FormFirmaMantenimientoPage } from '../form-firma-mantenimiento/form-firma-mantenimiento.page';

@Component({
  selector: 'app-lista-mantenimiento',
  templateUrl: './lista-mantenimiento.page.html',
  styleUrls: ['./lista-mantenimiento.page.scss'],
})
export class ListaMantenimientoPage implements OnInit {

  constructor(private menu:MenuController, private router: Router, private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('primerMenu');

  }

 async Form_lista_mantenimiento(){
    
    const modal = await this.modalCtrl.create({
      component: FormMantoPrevetivoPage
    });
    modal.present();
  }

  DescargarPDF(){

  }
async firmar(){
  const modal = await this.modalCtrl.create({
    component: FormFirmaMantenimientoPage
  });
  modal.present();
}
editarLista(){

}
eliminarLista(){

}
compartirLista(){

}

}
