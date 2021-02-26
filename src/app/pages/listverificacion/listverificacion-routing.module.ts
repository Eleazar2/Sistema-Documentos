import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListverificacionPage } from './listverificacion.page';

const routes: Routes = [
  {
    path: '',
    component: ListverificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListverificacionPageRoutingModule {}
