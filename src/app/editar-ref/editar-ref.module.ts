import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarRefPageRoutingModule } from './editar-ref-routing.module';

import { EditarRefPage } from './editar-ref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarRefPageRoutingModule
  ],
  declarations: [EditarRefPage]
})
export class EditarRefPageModule {}
