import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPersonalPage } from './form-personal.page';

const routes: Routes = [
  {
    path: '',
    component: FormPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPersonalPageRoutingModule {}
