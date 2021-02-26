import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOrdenTrabajoPage } from './form-orden-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: FormOrdenTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOrdenTrabajoPageRoutingModule {}
