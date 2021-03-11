import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Depto } from '../../interfaces/depto';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-compartirdoc',
  templateUrl: './compartirdoc.component.html',
  styleUrls: ['./compartirdoc.component.scss'],
})
export class CompartirdocComponent implements OnInit {

  departamento: Depto[] = [];

  constructor(private dataServices: DataService, private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.ListarDepartamento();
  }

  ListarDepartamento() {
    return this.dataServices.getAllDepartamento().subscribe(res => {
      console.log(res);
      this.departamento = res;

    }, err => console.error(err));
  }

  Selecdepartamento(valor: Depto){
    //console.log('item', valor);
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
