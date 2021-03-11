import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RespuestaEnvioOficI } from '../../interfaces/envio_ofic';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
})
export class NotificacionPage implements OnInit {

  listarenvio: RespuestaEnvioOficI[] = [];
  constructor(private menu: MenuController, private dataServices:DataService,private router:Router) { }


  ngOnInit() {
    this.listarEnvioOfice();
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('primerMenu');
  }

  listarEnvioOfice(){
    this.dataServices.getAllEnviadoOifc().subscribe(res =>{
      this.listarenvio = res;
    })
  }

  onFirmar(){
    this.router.navigate(['form-firma']);

  }
  onDescargar(){

  }
  onCompartir(){
    
  }

}
