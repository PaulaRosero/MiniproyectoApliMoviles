import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearRefPage } from './crear-ref.page';

const routes: Routes = [
  {
    path: '',
    component: CrearRefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearRefPageRoutingModule {}
