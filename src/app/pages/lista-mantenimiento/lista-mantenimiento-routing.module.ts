import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMantenimientoPage } from './lista-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMantenimientoPageRoutingModule {}
