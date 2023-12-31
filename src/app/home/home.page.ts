import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ProductComponent } from '../product/product.component';

import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  getCar(): Product[] {
    return this.data.getCar();
  }
}
