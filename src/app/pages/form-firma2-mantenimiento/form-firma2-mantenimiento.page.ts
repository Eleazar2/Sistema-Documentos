import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-firma2-mantenimiento',
  templateUrl: './form-firma2-mantenimiento.page.html',
  styleUrls: ['./form-firma2-mantenimiento.page.scss'],
})
export class FormFirma2MantenimientoPage implements OnInit {

  formFirma: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.formFirma = this.formBuilder.group({
        aprobo:['',Validators.required],
        fecha_aprobada:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  onFirma(){
    
  }

}
