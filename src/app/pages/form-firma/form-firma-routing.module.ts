import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFirmaPage } from './form-firma.page';

const routes: Routes = [
  {
    path: '',
    component: FormFirmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFirmaPageRoutingModule {}
