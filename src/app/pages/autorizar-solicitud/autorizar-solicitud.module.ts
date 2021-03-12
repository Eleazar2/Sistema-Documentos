import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizarSolicitudPageRoutingModule } from './autorizar-solicitud-routing.module';

import { AutorizarSolicitudPage } from './autorizar-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizarSolicitudPageRoutingModule
  ],
  declarations: [AutorizarSolicitudPage]
})
export class AutorizarSolicitudPageModule {}
