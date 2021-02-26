import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormListverificacionPageRoutingModule } from './form-listverificacion-routing.module';

import { FormListverificacionPage } from './form-listverificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormListverificacionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormListverificacionPage],
  exports: [FormListverificacionPage]
})
export class FormListverificacionPageModule {}
