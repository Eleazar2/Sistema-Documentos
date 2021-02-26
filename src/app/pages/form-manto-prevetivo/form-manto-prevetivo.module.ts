import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMantoPrevetivoPageRoutingModule } from './form-manto-prevetivo-routing.module';

import { FormMantoPrevetivoPage } from './form-manto-prevetivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormMantoPrevetivoPageRoutingModule
  ],
  declarations: [FormMantoPrevetivoPage],
  exports: [FormMantoPrevetivoPage]
})
export class FormMantoPrevetivoPageModule {}
