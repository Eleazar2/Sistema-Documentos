import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListverificacionPage } from './form-listverificacion.page';

const routes: Routes = [
  {
    path: '',
    component: FormListverificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormListverificacionPageRoutingModule {}
