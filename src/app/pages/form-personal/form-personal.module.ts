import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPersonalPageRoutingModule } from './form-personal-routing.module';

import { FormPersonalPage } from './form-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormPersonalPageRoutingModule
  ],
  declarations: [FormPersonalPage]
})
export class FormPersonalPageModule {}
