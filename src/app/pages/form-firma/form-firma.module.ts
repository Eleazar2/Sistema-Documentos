import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFirmaPageRoutingModule } from './form-firma-routing.module';

import { FormFirmaPage } from './form-firma.page';
//kjdskjdh
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormFirmaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormFirmaPage]
})
export class FormFirmaPageModule {}
