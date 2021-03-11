import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibMantoPreventPage } from './recib-manto-prevent.page';

const routes: Routes = [
  {
    path: '',
    component: RecibMantoPreventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibMantoPreventPageRoutingModule {}
