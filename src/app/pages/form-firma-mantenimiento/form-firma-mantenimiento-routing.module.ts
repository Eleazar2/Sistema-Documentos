import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFirmaMantenimientoPage } from './form-firma-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: FormFirmaMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFirmaMantenimientoPageRoutingModule {}
