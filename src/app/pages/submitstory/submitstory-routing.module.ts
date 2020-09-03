import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitstoryPage } from './submitstory.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitstoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitstoryPageRoutingModule {}
