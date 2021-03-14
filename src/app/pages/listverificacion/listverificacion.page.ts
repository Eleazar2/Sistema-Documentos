import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormListverificacionPage } from '../form-listverificacion/form-listverificacion.page';
import { FormAgregarEspacioPage } from '../form-agregar-espacio/form-agregar-espacio.page';
import { EspacioRevisadoI } from '../../interfaces/espacio-revisado';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listverificacion',
  templateUrl: './listverificacion.page.html',
  styleUrls: ['./listverificacion.page.scss'],
})
export class ListverificacionPage implements OnInit {

  listar_esp: EspacioRevisadoI[]=[];

  constructor( private modalCtrl: ModalController, private menu: MenuController, private dataServices: DataService, private router: Router) { }

  ngOnInit() {
    this.listarEspacioR_V();
  }

 
  irA_lista(){
    this.router.navigate(['lista']);
  }
  


 async ModalVerificacion(){
    const modal = await this.modalCtrl.create({
      component: FormAgregarEspacioPage
    });
    modal.present();
  }

  listarEspacioR_V(){
    this.dataServices.getAllEspacioRV().subscribe( res => {
      this.listar_esp = res;
    },err => console.error(err));
  }

}
