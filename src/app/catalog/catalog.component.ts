import { Component } from '@angular/core';
import { IProduct } from './product.module';
import { PRODUCTS } from './product.data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: IProduct[] = PRODUCTS;
  filter: string = '';

  getFilteredProducts(): IProduct[] {
    return this.filter === '' || this.filter === 'All'
      ? this.products
      : this.products.filter((product) => product.catagory === this.filter);
  }
}
