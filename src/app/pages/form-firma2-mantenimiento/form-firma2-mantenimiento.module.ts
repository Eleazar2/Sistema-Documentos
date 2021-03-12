import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFirma2MantenimientoPageRoutingModule } from './form-firma2-mantenimiento-routing.module';

import { FormFirma2MantenimientoPage } from './form-firma2-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormFirma2MantenimientoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormFirma2MantenimientoPage]
})
export class FormFirma2MantenimientoPageModule {}
