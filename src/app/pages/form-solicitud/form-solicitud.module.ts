import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSolicitudPageRoutingModule } from './form-solicitud-routing.module';

import { FormSolicitudPage } from './form-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormSolicitudPageRoutingModule
  ],
  declarations: [FormSolicitudPage],
  exports: [FormSolicitudPage]
})
export class FormSolicitudPageModule {}
