import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, NavController, Platform } from '@ionic/angular';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public product!: Product;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  id: number = 0;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = this.data.getProductById(this.id);
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Detail' : '';
  }

  addToCard() {
    this.data.addProductToCar(this.id);
    this.navCtrl.back();
  }
}
