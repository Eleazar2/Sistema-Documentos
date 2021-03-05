import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirmaI } from 'src/app/interfaces/firma';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-form-firma',
  templateUrl: './form-firma.page.html',
  styleUrls: ['./form-firma.page.scss'],
})
export class FormFirmaPage implements OnInit {

  formfirma: FormGroup;

  datofirma: FirmaI = {
    rfc: '',
    nombreC: '',
    fecha: new Date()
  }

  constructor(private formBuilder:FormBuilder, private modalCtrl: ModalController) {
    this.formfirma = this.formBuilder.group({
      rfc: ['',[Validators.required]],
      nombreC: ['',[Validators.required]],
      fecha: ['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  generarFirma(){

  }

  cambioFecha(event){
    console.log('evento', new Date(event.detail.value));
  }

}
