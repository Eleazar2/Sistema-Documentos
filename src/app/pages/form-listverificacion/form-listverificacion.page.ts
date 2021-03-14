import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ListaVerifcacionI } from '../../interfaces/lista-verificacion';
import { DataService } from '../../services/data.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-form-listverificacion',
  templateUrl: './form-listverificacion.page.html',
  styleUrls: ['./form-listverificacion.page.scss'],
})
export class FormListverificacionPage implements OnInit {

  FormList: FormGroup;
  formulario = true;
  listar: ListaVerifcacionI[]=[];
  datolista: ListaVerifcacionI = {
    id_lf:0,
    nombre_lf: '',
    depto_responsable: '',
    area_verificada: '',
    fecha_realizada: '',
    nombre_rec: '',
    firma_rec: '',
    nombre_area: '',
    firma_area: '', 
    estado: '',
    personal_id: 0

  }
  

  constructor(private modalCtrl:ModalController,public toastController: ToastController,private dataServices: DataService,
              private fb: FormBuilder,
              private router: Router
              ) {
                this.FormList = this.fb.group({
                  nombre_lf:['',[Validators.required]],
                  depto_responsable:['',[Validators.required]],
                  area_verificada:['',[Validators.required]],
                  fecha_realizada:['',[Validators.required]],
                  nombre_rec:['',Validators.required],
                  nombre_area:['',Validators.required]
                })

  }

  ngOnInit() {
  }


  closeModal(){
    this.modalCtrl.dismiss();
  }

  getAllLista(){
    this.dataServices.getAllLista_V().subscribe( res =>{
      this.listar = res;
    }, err => console.error(err));
  }

   Generar(){
     if(this.datolista == 0){
        this.dataServices.crearLista_V(this.datolista).subscribe(
              (res)=>{
                console.log(res);
                this.closeModal();
                this.router.navigate(['listverificacion']);
                this.presentToast('Nueva lista agregada..');
              
            },err => console.error(err));
     }else {
          this.dataServices.updateLista_V(this.datolista.id_lf,this.datolista).subscribe( res => {
            this.presentToast('Lista actualizado con exito');
          }, err => console.error(err));
     }

    
  }


async  presentToast(message:string){
    const toast = await this.toastController.create({
      message,
      position:'top',
      color:'success',
      duration: 2000
    });
    toast.present();
  }



}
