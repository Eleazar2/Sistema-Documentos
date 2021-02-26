import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController, IonList, LoadingController, AlertController } from '@ionic/angular';
import { UserPersonal } from '../../interfaces/personal';
import { AuthService } from '../../services/auth.service';
import { FormPersonalPage } from '../form-personal/form-personal.page';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  @ViewChild('lista') lista: IonList;


  personal: UserPersonal[] = [];
  textoBuscar = '';  

  constructor(private authServices:AuthService ,private menu: MenuController, private modalCtrl: ModalController,private alertCtrl: AlertController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.ListarPersonal();
  }

//mostrar menu
  openMenu2(){
    this.menu.enable(true, 'segundoMenu');
    this.menu.enable(false,'primerMenu');
    this.menu.enable(false,'tercerMenu');
    this.menu.open('segundoMenu');
  }

  //Abrir modal
  async ModalPerson(){
    const modal = await this.modalCtrl.create({
      component: FormPersonalPage
    });
    modal.present();
  }

  //buscar
  buscarPersonal(event){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  //Listar Personal
  ListarPersonal(){

     return this.authServices.getAllPersonal().subscribe( res => {
          this.personal = res;
          console.log(res);
      });
  }

  //Editar

  editarP(personal: UserPersonal){

    this.lista.closeSlidingItems();
    
    this.modalCtrl.create({
      component: FormPersonalPage,
      componentProps: {personal}
    }).then(modal => modal.present());
        console.log(personal);

  }

  //Eliminar
 async eliminarP(id: UserPersonal){
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

            this.authServices.deletePersonal(id)
                .subscribe((res) => {
                //this.router.navigateByUrl('/home');
                this.ListarPersonal();
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
