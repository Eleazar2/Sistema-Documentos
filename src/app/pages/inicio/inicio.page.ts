import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { MenuController, PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PerfilComponent } from '../../components/perfil/perfil.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 
  constructor(private dataServices: DataService, private menu: MenuController, private authServices:AuthService, private router: Router,private popoverCtrl: PopoverController) { }

  ngOnInit() {
    
  }

  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('primerMenu');

  }

 async cerrarClick(evento){
  const popover = await  this.popoverCtrl.create({
    component: PerfilComponent,
    event: evento,
    mode: 'ios'
    });
    await popover.present();
    //this.authServices.logout();
    //this.router.navigate(['login']);
  }



}
