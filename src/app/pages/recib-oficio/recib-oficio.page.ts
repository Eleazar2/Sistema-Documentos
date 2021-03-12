import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController, IonList } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { RespuestaEnvioOficI } from '../../interfaces/envio_ofic';
import { async } from '@angular/core/testing';
import { FormOficiosPage } from '../form-oficios/form-oficios.page';
import { OficioI } from '../../interfaces/oficio';

@Component({
  selector: 'app-recib-oficio',
  templateUrl: './recib-oficio.page.html',
  styleUrls: ['./recib-oficio.page.scss'],
})
export class RecibOficioPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  listarenvoficio: RespuestaEnvioOficI[] = [];

  constructor(private menu: MenuController,private dataServices:DataService, private modalCtrl:ModalController) { }

  ngOnInit() {
    //this.listarEnvioOfice();
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('primerMenu');
  }
/*
  listarEnvioOfice(){
    this.dataServices.getAllEnviadoOifc().subscribe(res =>{
      this.listarenvoficio = res;
    }, err => console.error(err));
  }
*/
async  Editar(oficio: OficioI){
  this.lista.closeSlidingItems();
  console.log(oficio);
  const modal = await this.modalCtrl.create({
    component: FormOficiosPage,
    componentProps: { oficio }
  }).then(modal => modal.present());
  }
  Descargar(){

  }

}
