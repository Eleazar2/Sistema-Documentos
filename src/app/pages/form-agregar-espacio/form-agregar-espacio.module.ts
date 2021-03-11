import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAgregarEspacioPageRoutingModule } from './form-agregar-espacio-routing.module';

import { FormAgregarEspacioPage } from './form-agregar-espacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAgregarEspacioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormAgregarEspacioPage]
})
export class FormAgregarEspacioPageModule {}
