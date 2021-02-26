import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudPageRoutingModule } from './solicitud-routing.module';

import { SolicitudPage } from './solicitud.page';
import { FormSolicitudPage } from '../form-solicitud/form-solicitud.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SolicitudPage,FormSolicitudPage],
  entryComponents: [FormSolicitudPage]
})
export class SolicitudPageModule {}
