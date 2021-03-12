import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizarOficioPageRoutingModule } from './autorizar-oficio-routing.module';

import { AutorizarOficioPage } from './autorizar-oficio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizarOficioPageRoutingModule
  ],
  declarations: [AutorizarOficioPage]
})
export class AutorizarOficioPageModule {}
