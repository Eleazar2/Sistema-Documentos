import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.page.html',
  styleUrls: ['./documento.page.scss'],
})
export class DocumentoPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }


  openMenu1(){
    this.menu.enable(true,'primerMenu');
      this.menu.enable(false, 'segundoMenu');
      this.menu.enable(false,'tercerMenu');
      this.menu.open('primerMenu');
  }

}
