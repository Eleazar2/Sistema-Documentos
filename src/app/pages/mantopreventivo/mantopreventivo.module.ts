import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantopreventivoPageRoutingModule } from './mantopreventivo-routing.module';

import { MantopreventivoPage } from './mantopreventivo.page';
import { FormMantoPrevetivoPage } from '../form-manto-prevetivo/form-manto-prevetivo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantopreventivoPageRoutingModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [MantopreventivoPage,FormMantoPrevetivoPage],
  entryComponents:[FormMantoPrevetivoPage]
})
export class MantopreventivoPageModule {}
