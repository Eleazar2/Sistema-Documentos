import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibMantoPreventPageRoutingModule } from './recib-manto-prevent-routing.module';

import { RecibMantoPreventPage } from './recib-manto-prevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibMantoPreventPageRoutingModule
  ],
  declarations: [RecibMantoPreventPage]
})
export class RecibMantoPreventPageModule {}
