import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibOficioPage } from './recib-oficio.page';

const routes: Routes = [
  {
    path: '',
    component: RecibOficioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibOficioPageRoutingModule {}
