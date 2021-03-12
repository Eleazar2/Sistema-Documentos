import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMantenimientoPage } from './form-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: FormMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMantenimientoPageRoutingModule {}
