import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartamentosPageRoutingModule } from './departamentos-routing.module';

import { DepartamentosPage } from './departamentos.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartamentosPageRoutingModule,
    PipesModule
  ],
  declarations: [DepartamentosPage]
})
export class DepartamentosPageModule {}
