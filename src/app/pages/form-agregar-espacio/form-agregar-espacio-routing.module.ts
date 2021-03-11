import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAgregarEspacioPage } from './form-agregar-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: FormAgregarEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAgregarEspacioPageRoutingModule {}
