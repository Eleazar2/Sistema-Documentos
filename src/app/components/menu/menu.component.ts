import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { MenuController, IonItem, IonList, IonMenuToggle } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('cerrar') cerrar: IonMenuToggle;

 
 
  //menu1: Observable<Componente[]>;
  //menu2: Observable<Componente[]>;
  //menu3: Observable<Componente[]>;

  //cerrarsesion : Componente;

  constructor(private dataService: DataService,private menu: MenuController, private authService: AuthService, private authServices: AuthService, private router:Router) { }

  ngOnInit() {
    //this.menu1 = this.dataService.getMenuOpts();
    //this.menu2 = this.dataService.getMenuadmin();
    //this.menu3 = this.dataService.getMenuOpt();
  }

  CerrarSesion1(){
    this.authServices.logout();
    this.router.navigate(['login']); 
  }

  CerrarSesion2(){
    this.authServices.logout();
    this.router.navigate(['login-admin']); 
  }
  
/*if(cerrarsesion){
      console.log(cerrarsesion);
      this.authServices.logout();
      this.router.navigate(['login']);
    }*/
    //this.authServices.logout();
  

}
