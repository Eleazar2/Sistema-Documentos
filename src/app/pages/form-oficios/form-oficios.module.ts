import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOficiosPageRoutingModule } from './form-oficios-routing.module';

import { FormOficiosPage } from './form-oficios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOficiosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormOficiosPage],
  exports: [FormOficiosPage]
})
export class FormOficiosPageModule {}
