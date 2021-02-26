import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Depto } from '../../interfaces/depto';
import { async } from '@angular/core/testing';
import { AlertController, IonList, LoadingController, ModalController, MenuController } from '@ionic/angular';
import { FormDepartamentoPage } from '../form-departamento/form-departamento.page';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  departamento: Depto[] = [];

  constructor(private http: HttpClient,
    private dataService: DataService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private menu: MenuController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.ListarDepartamento();
  }


  openMenu2() {
    this.menu.enable(true, 'segundoMenu');
    this.menu.enable(false, 'primerMenu');
    this.menu.enable(false, 'tercerMenu');
    this.menu.open('segundoMenu');
  }


  ListarDepartamento() {
    return this.dataService.getAllDepartamento().subscribe(res => {
      console.log(res);
      this.departamento = res;

    }, err => console.error(err));
  }


  Editar(dato: Depto) {
    this.lista.closeSlidingItems();

    this.modalCtrl.create({
      component: FormDepartamentoPage,
      componentProps: { dato }
    }).then(modal => modal.present());
    console.log(dato);
  }

  async Eliminar(id: Depto) {

    this.lista.closeSlidingItems();

    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Estás seguro que desea eliminar el usuario ?',
      buttons: [
        {
          text: 'Si',
          handler: async () => {
            let l = await this.loadingCtrl.create({
              message: 'Borrando...'
            });
            l.present();

            this.dataService.deleteDepartamento(id)
              .subscribe((res) => {
                //this.router.navigateByUrl('/home');
                this.ListarDepartamento();
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

  async ModalDepto() {
    const modal = await this.modalCtrl.create({
      component: FormDepartamentoPage
    });
    modal.present();
  }

}
