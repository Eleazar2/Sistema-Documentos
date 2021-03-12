import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-autorizar-oficio',
  templateUrl: './autorizar-oficio.page.html',
  styleUrls: ['./autorizar-oficio.page.scss'],
})
export class AutorizarOficioPage implements OnInit {

  constructor(private router:Router, private modalCtrl:ModalController) { }

  ngOnInit() {

  }

async  Firma(){
   /* const modal = await this.modalCtrl.create({
      component: FormMantoPrevetivoPage
    });
    modal.present();*/
  }
  vistoBueno(){
    
  }

}
