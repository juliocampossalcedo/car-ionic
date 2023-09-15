import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  categoria: string;
  price: number;
  offertPrice: number;
  image: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: Product[] = [
    {
      name: "Coche Cuna Compacto Rocking Blac",
      categoria: "Infantil",
      price: 499.9,
      id: 0,
      offertPrice: 449.9,
      image: "./../../assets/products/product1.webp"
    },
    {
      name: "Silla De Comer AltaINFANTI 360° Gris",
      categoria: "Infantil",
      price: 470.9,
      id: 1,
      offertPrice: 379.9,
      image: "./../../assets/products/product2.webp"
    },
    {
      name: "Vino Tinto SÉPTIMA Malbec Botella 750ml",
      categoria: "Bebidas",
      price: 54.9,
      id: 2,
      offertPrice: 45.9,
      image: "./../../assets/products/product3.webp"
    },
    {
      name: "Helado BELL'S Trisabor Pote 1.27Kg",
      categoria: "Postres",
      price: 16.9,
      id: 3,
      offertPrice: 14.9,
      image: "./../../assets/products/product4.webp"
    }
  ];

  public car: Product[] = [];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }

  public addProductToCar(id: number): void {
    this.car.push(this.getProductById(id));
  }

  public getCar(): Product[] {
    return this.car;
  }

  public removeFromCar(id: number): void {
    this.car.splice(this.car.findIndex(item => item.id === id), 1);
  }

}
