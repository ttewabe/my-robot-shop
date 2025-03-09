import { Component } from '@angular/core';
import { IProduct } from './product.module';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      name: 'Friendly Robot',
      description: 'Friend Robot head with two eyes and a mouth',
      price: 945.0,
      imageName: 'assets/images/robot-head.jpeg',
      catagory: 'Head',
      discount: 0.2,
    };
  }
}
