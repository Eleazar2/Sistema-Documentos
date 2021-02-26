import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDepartamentoPageRoutingModule } from './form-departamento-routing.module';

import { FormDepartamentoPage } from './form-departamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormDepartamentoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormDepartamentoPage]
})
export class FormDepartamentoPageModule {}
