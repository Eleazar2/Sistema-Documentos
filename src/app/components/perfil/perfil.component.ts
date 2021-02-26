import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PerfilPage } from '../../pages/perfil/perfil.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(private popoverCtrl:PopoverController,private authServices:AuthService,private router: Router) { }

  ngOnInit() {}

  onPerfil(valor){
    this.popoverCtrl.dismiss({
      event: valor
    });
    this.router.navigate(['perfil']);
  }

  CerrarSesion(valor){
    this.popoverCtrl.dismiss({
      event: valor
    });
    this.authServices.logout();
    this.router.navigate(['login']);
  }

}
