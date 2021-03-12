import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizarOficioPage } from './autorizar-oficio.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizarOficioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizarOficioPageRoutingModule {}
