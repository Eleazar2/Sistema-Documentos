import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMantenimientoPageRoutingModule } from './lista-mantenimiento-routing.module';

import { ListaMantenimientoPage } from './lista-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMantenimientoPageRoutingModule
  ],
  declarations: [ListaMantenimientoPage]
})
export class ListaMantenimientoPageModule {}
