import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibSolicitudPage } from './recib-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: RecibSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibSolicitudPageRoutingModule {}
