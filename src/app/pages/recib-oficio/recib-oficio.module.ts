import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibOficioPageRoutingModule } from './recib-oficio-routing.module';

import { RecibOficioPage } from './recib-oficio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibOficioPageRoutingModule
  ],
  declarations: [RecibOficioPage]
})
export class RecibOficioPageModule {}
