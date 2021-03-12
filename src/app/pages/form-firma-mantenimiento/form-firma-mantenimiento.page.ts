import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-firma-mantenimiento',
  templateUrl: './form-firma-mantenimiento.page.html',
  styleUrls: ['./form-firma-mantenimiento.page.scss'],
})
export class FormFirmaMantenimientoPage implements OnInit {
  formFirma:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.formFirma = this.formBuilder.group({
        elabora:['',Validators.required],
        fecha_alaboracion:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  onFirma(){
    
  }

}
