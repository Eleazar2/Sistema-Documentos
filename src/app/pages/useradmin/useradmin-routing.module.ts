import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseradminPage } from './useradmin.page';

const routes: Routes = [
  {
    path: '',
    component: UseradminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseradminPageRoutingModule {}
