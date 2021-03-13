import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FormListverificacionPage } from '../form-listverificacion/form-listverificacion.page';
import { FormAgregarEspacioPage } from '../form-agregar-espacio/form-agregar-espacio.page';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { AnyMxRecord } from 'dns';

@Component({
  selector: 'app-listverificacion',
  templateUrl: './listverificacion.page.html',
  styleUrls: ['./listverificacion.page.scss'],
})
export class ListverificacionPage implements OnInit {

  ///recuperamos el id de la pantalla anterior
  public id = this.navParams.get('id');
  list: any;
  constructor( private modalCtrl: ModalController,private dataServices: DataService,private navParams: NavParams,private router:Router, private menu: MenuController) { }

  ngOnInit() {
this.mostrar(this.id);
  }
  closeModal(){
    //this.router.navigate(['lista']);
    this.modalCtrl.dismiss();
  }
  eliminarcuerpo(id_cu:string) {
    this.dataServices.delatecuerpo(id_cu)
      .subscribe(() => {
      })
  this.router.navigate['listverificacion'];

  }
    openMenu1(){
      this.menu.enable(true,'primerMenu');
      this.menu.enable(false, 'segundoMenu');
      this.menu.open('primerMenu');
    }
  mostrar(id){
    this.dataServices.getjoinLista(id).subscribe(res =>{
     this.list = res;
     console.log(res);
    
  }, err => console.error(err));
  }


 async ModalVerificacion(){
    const modal = await this.modalCtrl.create({
      component: FormAgregarEspacioPage
    });
    modal.present();
  }
}
