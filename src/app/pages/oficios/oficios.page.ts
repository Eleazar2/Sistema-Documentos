import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormOficiosPage } from '../form-oficios/form-oficios.page';
import { OficioI } from '../../interfaces/oficio';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-oficios',
  templateUrl: './oficios.page.html',
  styleUrls: ['./oficios.page.scss'],
})
export class OficiosPage implements OnInit {

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

  onEliminar(){
    
  }

  onDescargar(){

  }

  onEnviar(){

  }

  onDepartamentos(event){
    console.log(event);
  }



}
