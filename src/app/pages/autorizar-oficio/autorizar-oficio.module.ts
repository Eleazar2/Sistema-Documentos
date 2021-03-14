import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizarOficioPageRoutingModule } from './autorizar-oficio-routing.module';

import { AutorizarOficioPage } from './autorizar-oficio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizarOficioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AutorizarOficioPage]
})
export class AutorizarOficioPageModule {}
