import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantopreventivoPage } from './mantopreventivo.page';

const routes: Routes = [
  {
    path: '',
    component: MantopreventivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantopreventivoPageRoutingModule {}
