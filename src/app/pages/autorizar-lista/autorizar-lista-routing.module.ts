import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizarListaPage } from './autorizar-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizarListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizarListaPageRoutingModule {}
