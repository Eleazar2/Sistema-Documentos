import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizarListaPageRoutingModule } from './autorizar-lista-routing.module';

import { AutorizarListaPage } from './autorizar-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizarListaPageRoutingModule
  ],
  declarations: [AutorizarListaPage]
})
export class AutorizarListaPageModule {}
