import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibSolicitudPageRoutingModule } from './recib-solicitud-routing.module';

import { RecibSolicitudPage } from './recib-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibSolicitudPageRoutingModule
  ],
  declarations: [RecibSolicitudPage]
})
export class RecibSolicitudPageModule {}
