import { Component, OnInit } from '@angular/core';
import { UserAdmin } from '../../interfaces/user-admin';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfil: UserAdmin; 
  constructor(private authServices: AuthService) { }

  ngOnInit() {

    
    
  }



  perfilUserAdmin(){
    this.authServices.getPerfil().subscribe(res => {
      console.log(res);
      this.perfil = res;
    });
  }

}
