import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOrdenTrabajoPageRoutingModule } from './form-orden-trabajo-routing.module';

import { FormOrdenTrabajoPage } from './form-orden-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormOrdenTrabajoPageRoutingModule
  ],
  declarations: [FormOrdenTrabajoPage],
  exports: [FormOrdenTrabajoPage]
})
export class FormOrdenTrabajoPageModule {}
