import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRefPageRoutingModule } from './crear-ref-routing.module';

import { CrearRefPage } from './crear-ref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearRefPageRoutingModule
  ],
  declarations: [CrearRefPage]
})
export class CrearRefPageModule {}
