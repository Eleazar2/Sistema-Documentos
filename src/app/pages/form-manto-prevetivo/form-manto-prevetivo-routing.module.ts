import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMantoPrevetivoPage } from './form-manto-prevetivo.page';

const routes: Routes = [
  {
    path: '',
    component: FormMantoPrevetivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMantoPrevetivoPageRoutingModule {}
