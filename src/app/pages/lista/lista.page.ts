import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, MenuController, ModalController } from '@ionic/angular';
import { FormListverificacionPage } from '../form-listverificacion/form-listverificacion.page';
import { FormFirmaPage } from '../form-firma/form-firma.page';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @ViewChild('lista') lista: IonList;

  constructor(private menu:MenuController, private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.open('primerMenu');
  }

async  ModalVerificacion(){
    const modal = await this.modalCtrl.create({
      component: FormListverificacionPage
    });
    modal.present();
  }

  DescargarPDF(){

  }

 async firmar() {
    this.lista.closeSlidingItems();
    const modal = await this.modalCtrl.create({
      component: FormFirmaPage
    }).then(modal => modal.present());

  }
  editarLista() {
    this.lista.closeSlidingItems();

  }
  eliminarLista() {
    this.lista.closeSlidingItems();

  }
  compartirLista() {
    this.lista.closeSlidingItems();

  }

}
