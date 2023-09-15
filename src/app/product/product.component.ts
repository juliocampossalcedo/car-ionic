import { ChangeDetectionStrategy, Component, inject, Input, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Product } from '../services/data.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  private platform = inject(Platform);
  @Input() product?: Product;
  @Input() isCar?: Boolean;
  @Output() removeItem = new EventEmitter();

  constructor(private router: Router) {

  }

  isIos() {
    return this.platform.is('ios')
  }

  removeFromCard(id: number) {
    this.removeItem.emit(id);
  }

  navigateProduct(id: number) {
    if (!this.isCar) {
      this.router.navigate(['/product/' + id])
    }
  }
}
