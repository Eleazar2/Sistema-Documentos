import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdentrabajoPageRoutingModule } from './ordentrabajo-routing.module';

import { OrdentrabajoPage } from './ordentrabajo.page';
import { FormOrdenTrabajoPage } from '../form-orden-trabajo/form-orden-trabajo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdentrabajoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrdentrabajoPage,FormOrdenTrabajoPage],
  entryComponents: [FormOrdenTrabajoPage]
})
export class OrdentrabajoPageModule {}
