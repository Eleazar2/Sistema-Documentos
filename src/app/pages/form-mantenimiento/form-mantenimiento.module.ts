import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMantenimientoPageRoutingModule } from './form-mantenimiento-routing.module';

import { FormMantenimientoPage } from './form-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMantenimientoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormMantenimientoPage]
})
export class FormMantenimientoPageModule {}
