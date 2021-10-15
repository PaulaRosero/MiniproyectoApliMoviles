import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarRefPage } from './editar-ref.page';

const routes: Routes = [
  {
    path: '',
    component: EditarRefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarRefPageRoutingModule {}
