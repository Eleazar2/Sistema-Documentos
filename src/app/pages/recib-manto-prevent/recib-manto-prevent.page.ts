import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recib-manto-prevent',
  templateUrl: './recib-manto-prevent.page.html',
  styleUrls: ['./recib-manto-prevent.page.scss'],
})
export class RecibMantoPreventPage implements OnInit {

  listarenvmanto;
  constructor(private menu:MenuController) { }

  ngOnInit() {
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('primerMenu');
  }

}
