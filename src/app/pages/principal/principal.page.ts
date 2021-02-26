import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController, IonList, AlertController, LoadingController } from '@ionic/angular';
import { UseradminPage } from '../useradmin/useradmin.page';
import { UserAdmin } from '../../interfaces/user-admin';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  @ViewChild('lista') lista: IonList;

  useradmin: UserAdmin[] = [];

  constructor(private authServices: AuthService, private menu: MenuController, private modalCtrl: ModalController,private alertCtrl: AlertController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.listarUserAdmin();
  }

  openMenu2() {
    this.menu.enable(true, 'segundoMenu');
    this.menu.enable(false, 'primerMenu');
    this.menu.open('segundoMenu');
  }

  async ModalAdmin() {
    const modal = await this.modalCtrl.create({
      component: UseradminPage
    });
    modal.present();
  }

  listarUserAdmin() {
    return this.authServices.getAllUserAdmin().subscribe(res => {
      console.log(res);
      this.useradmin = res;
    });
  }

  editarUAdmin(useradmin: UserAdmin) {
    this.lista.closeSlidingItems();
    
    this.modalCtrl.create({
      component: UseradminPage,
      componentProps: {useradmin}
    }).then(modal => modal.present());
        console.log(useradmin);

  }
async  eliminarUAdmin(id: UserAdmin) {
    this.lista.closeSlidingItems();

    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Estás seguro que desea eliminar el personal ?',
      buttons: [
        {
          text: 'Si',
          handler: async () => {
            let l = await this.loadingCtrl.create({
              message: 'Borrando...'
            });
            l.present();

            this.authServices.deleteUserAdmin(id)
                .subscribe((res) => {
                //this.router.navigateByUrl('/home');
                this.listarUserAdmin();
                l.dismiss();
              }, (error: any) => {
                l.dismiss();
              });
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No borrar');
          }
        }
      ]
    });
    alert.present();

  }

}
