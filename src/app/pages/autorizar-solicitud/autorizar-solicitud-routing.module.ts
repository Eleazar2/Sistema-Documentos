import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizarSolicitudPage } from './autorizar-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizarSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizarSolicitudPageRoutingModule {}
