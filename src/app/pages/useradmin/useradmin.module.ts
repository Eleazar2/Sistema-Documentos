import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseradminPageRoutingModule } from './useradmin-routing.module';

import { UseradminPage } from './useradmin.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UseradminPageRoutingModule
  ],
  declarations: [UseradminPage]
})
export class UseradminPageModule {}
