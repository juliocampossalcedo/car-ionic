import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CarPage } from './car.page';
import { CarPageRoutingModule } from './car-routing.module';
import { ProductComponentModule } from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductComponentModule,
    CarPageRoutingModule
  ],
  declarations: [CarPage]
})
export class CarPageModule {}
