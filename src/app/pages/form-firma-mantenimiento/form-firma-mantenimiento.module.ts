import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFirmaMantenimientoPageRoutingModule } from './form-firma-mantenimiento-routing.module';

import { FormFirmaMantenimientoPage } from './form-firma-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormFirmaMantenimientoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormFirmaMantenimientoPage]
})
export class FormFirmaMantenimientoPageModule {}
