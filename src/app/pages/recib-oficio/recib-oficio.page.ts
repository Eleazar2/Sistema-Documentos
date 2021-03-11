import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { RespuestaEnvioOficI } from '../../interfaces/envio_ofic';

@Component({
  selector: 'app-recib-oficio',
  templateUrl: './recib-oficio.page.html',
  styleUrls: ['./recib-oficio.page.scss'],
})
export class RecibOficioPage implements OnInit {

  listarenvlista: RespuestaEnvioOficI[] = [];

  constructor(private menu: MenuController,private dataServices:DataService) { }

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
      this.listarenvlista = res;
    }, err => console.error(err));
  }

  onFirmar(){

  }
  onDescargar(){

  }
  onCompartir(){

  }

}
