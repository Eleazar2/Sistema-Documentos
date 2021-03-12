import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirmaI } from 'src/app/interfaces/firma';
import { ModalController } from '@ionic/angular';
import { OficioI } from '../../interfaces/oficio';
import { DataService } from '../../services/data.service';
import { NavParams } from '@ionic/angular';
@Component({

  selector: 'app-form-firma',
  templateUrl: './form-firma.page.html',
  styleUrls: ['./form-firma.page.scss'],
})
export class FormFirmaPage implements OnInit {
  
 
  qrData = '';
  qrData1 = '';
  qrData2 = '';
  qrData3 = '.';
  qrData4 = '.';
  qrData5 = '.';
  scan = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  formfirma: FormGroup;

  datofirma: FirmaI = {
    rfc: '',
    nombreC: '',
    fecha: new Date()
  }
  @Input() id: string;
  id1: any;
  constructor(private formBuilder:FormBuilder,navParams: NavParams, private modalCtrl: ModalController, private dataServices: DataService) {
    this.formfirma = this.formBuilder.group({
      rfc: ['',[Validators.required]],
      nombreC: ['',[Validators.required]],
      fecha: ['',[Validators.required]]
    });
    console.log(JSON.stringify(navParams.get('id')));
   
    this.id1 = JSON.stringify(navParams.get('id'));
   
   }
   @Input() oficio: OficioI ;
  isUpdate = false;
  datoficio = {
    numero: null,
    nombre_o: '',
    fecha: '',
    oficio: '',
    asunto: '',
    nombre_dirigido: '',
    depto_dirigido: '',
    cuerpo: '',
    remitente_depto: '',
    visto_bueno: '',
    estado: '',
    firma:'',
    personal_id: '',

  }
  ngOnInit() {
   
    
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  createCode() {
    this.scan = `BEGIN:VCARD
VERSION:3.0

URL:${this.qrData3}
EMAIL:${this.qrData4}
TEL:${this.qrData5}
END:VCARD
`
    //	this.scan = this.qrData;
   
  }

  cambioFecha(event){
    console.log('evento', new Date(event.detail.value));
  }
descargar(){
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const imageData = canvas.toDataURL('image/jpeg').toString();
  console.log('data', imageData);

  let data = imageData.split(',')['1'];
  console.log(data);
}
update(id) {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const imageData = canvas.toDataURL('image/jpeg').toString();
  console.log('data', imageData);

  let data = imageData.split(',')['1'];
  console.log(data);
  //Update item by taking id and updated data object
  this.datoficio.firma = data
  this.dataServices.updateOficio(id, this.oficio).subscribe(response => {
  //this.closeModal();
  
  })
}
detalle(){
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const imageData = canvas.toDataURL('image/jpeg').toString();
  console.log('data', imageData);
  
  let data = imageData.split(',')['1'];
  this.dataServices.getIdOficio(this.id1).subscribe(res =>{
    console.log(res[0]);
this.datoficio=(res[0])
console.log(this.datoficio.nombre_o);


//Update item by taking id and updated data object
//this.datoficio.firma = data
this.datoficio = {
  numero: this.datoficio.numero,
  nombre_o: this.datoficio.nombre_o,
  fecha: this.datoficio.fecha,
  oficio: this.datoficio.oficio,
  asunto: this.datoficio.asunto,
  nombre_dirigido: this.datoficio.nombre_dirigido,
  depto_dirigido: this.datoficio.depto_dirigido,
  cuerpo: this.datoficio.cuerpo,
  remitente_depto: this.datoficio.remitente_depto,
  visto_bueno: this.datoficio.visto_bueno,
  estado: this.datoficio.estado,
  firma:imageData,
  personal_id: this.datoficio.personal_id

}
this.dataServices.updateOficio(this.id1, this.datoficio).subscribe(() => {
//this.closeModal();

})
  }, err =>console.error(err));
  
}
}
