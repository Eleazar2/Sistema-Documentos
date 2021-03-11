import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibListaPageRoutingModule } from './recib-lista-routing.module';

import { RecibListaPage } from './recib-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibListaPageRoutingModule
  ],
  declarations: [RecibListaPage]
})
export class RecibListaPageModule {}
