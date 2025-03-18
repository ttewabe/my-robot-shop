import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { ILineItem } from './catalog/line-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ILineItem[] = [];

  constructor() {}

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      const discountedPrice =
        item.product.price * (1 - (item.product.discount ?? 0));
      return total + item.qty * discountedPrice;
    }, 0);
  }

  findLineItem(product: IProduct) {
    return this.cart.find((li) => li.product.id === product.id);
  }

  add(product: IProduct) {
    let lineItem = this.findLineItem(product);
    if (lineItem !== undefined) {
      lineItem.qty++;
    } else {
      lineItem = { product: product, qty: 1 };
      this.cart.push(lineItem);
    }
    console.log('added', product.name, 'to cart!');
    console.log('Total price: $', this.getTotalPrice());
  }
}
