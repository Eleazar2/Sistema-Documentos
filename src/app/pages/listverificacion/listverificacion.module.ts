import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListverificacionPageRoutingModule } from './listverificacion-routing.module';

import { ListverificacionPage } from './listverificacion.page';
import { FormListverificacionPage } from '../form-listverificacion/form-listverificacion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListverificacionPageRoutingModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [ListverificacionPage,FormListverificacionPage],
  entryComponents: [FormListverificacionPage]
})
export class ListverificacionPageModule {}
