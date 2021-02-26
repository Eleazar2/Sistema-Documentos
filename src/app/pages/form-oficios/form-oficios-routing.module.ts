import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOficiosPage } from './form-oficios.page';

const routes: Routes = [
  {
    path: '',
    component: FormOficiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOficiosPageRoutingModule {}
