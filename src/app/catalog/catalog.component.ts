import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { PRODUCTS } from './product.data';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: IProduct[] = PRODUCTS;
  filter: string = '';

  constructor(private cartSvc: CartService) {}

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredProducts(): IProduct[] {
    return this.filter === '' || this.filter === 'All'
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }
}
