import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDepartamentoPage } from './form-departamento.page';

const routes: Routes = [
  {
    path: '',
    component: FormDepartamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDepartamentoPageRoutingModule {}
