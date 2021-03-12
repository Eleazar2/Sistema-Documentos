import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFirmaPageRoutingModule } from './form-firma-routing.module';

import { FormFirmaPage } from './form-firma.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormFirmaPageRoutingModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    QRCodeModule
  ],
  declarations: [FormFirmaPage]
})
export class FormFirmaPageModule {}
