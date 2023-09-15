import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ProductComponent } from '../product/product.component';

import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: 'car.page.html',
  styleUrls: ['car.page.scss'],
})
export class CarPage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getCar(): Product[] {
    return this.data.getCar();
  }

  getPayment() : number {
    return this.getCar().reduce((total, item) => total + item.offertPrice, 0);
  }

  removeFromCar(id: number) : void {
    this.data.removeFromCar(id);
  }

}
