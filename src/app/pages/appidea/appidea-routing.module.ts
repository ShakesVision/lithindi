import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppideaPage } from './appidea.page';

const routes: Routes = [
  {
    path: '',
    component: AppideaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppideaPageRoutingModule {}
