import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, MenuController, IonList } from '@ionic/angular';
import { FormOficiosPage } from '../form-oficios/form-oficios.page';
import { OficioI } from '../../interfaces/oficio';
import { DataService } from '../../services/data.service';
import { FormFirmaPage } from '../form-firma/form-firma.page';

@Component({
  selector: 'app-oficios',
  templateUrl: './oficios.page.html',
  styleUrls: ['./oficios.page.scss'],
})
export class OficiosPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  datos: OficioI [] = [];
  
  constructor( private modalCtrl: ModalController, private menu: MenuController, private dataServices: DataService) { }

  ngOnInit() {
    this.ListarOficio();
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('primerMenu');
  }


  async ModalOficio(){
    const modal = await this.modalCtrl.create({
      component: FormOficiosPage
    });
    modal.present();
  }

  ListarOficio(){
    this.dataServices.getAllOficio().subscribe( res => {
      this.datos = res;
    }, err => console.error(err));
  }

  onClick(){

  }

  desacrgar(){

  }
async  firmar(dato){
  this.lista.closeSlidingItems();
    const modal = await this.modalCtrl.create({
      component: FormFirmaPage,
      componentProps: {dato}
    }).then(modal => modal.present());

  }

async  editarOfi(oficio: OficioI){
    this.lista.closeSlidingItems();
    const modal = await this.modalCtrl.create({
      component: FormOficiosPage,
      componentProps: {oficio}
    }).then(modal => modal.present());

  }
  eliminarOfi(id: OficioI){
    this.lista.closeSlidingItems();
    console.log('Eliminado',id);
  }
  compartirOfi(){
    this.lista.closeSlidingItems();

  }

  onDepartamentos(event){
    console.log(event);
  }



}
