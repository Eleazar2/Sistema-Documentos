import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFirma2MantenimientoPage } from './form-firma2-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: FormFirma2MantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFirma2MantenimientoPageRoutingModule {}
