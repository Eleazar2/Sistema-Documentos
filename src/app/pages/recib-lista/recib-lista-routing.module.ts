import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibListaPage } from './recib-lista.page';

const routes: Routes = [
  {
    path: '',
    component: RecibListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibListaPageRoutingModule {}
