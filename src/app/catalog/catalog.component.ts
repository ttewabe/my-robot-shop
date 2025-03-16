import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { PRODUCTS } from './product.data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: IProduct[] = PRODUCTS;
  filter: string = '';
  cart: IProduct[] = [];

  addedToCart(product: IProduct) {
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }

  getFilteredProducts(): IProduct[] {
    return this.filter === '' || this.filter === 'All'
      ? this.products
      : this.products.filter((product) => product.catagory === this.filter);
  }
}
