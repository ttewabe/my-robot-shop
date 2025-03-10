import { Component } from '@angular/core';
import { IProduct } from './product.module';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: IProduct[];

  constructor() {
    this.products = [
      {
        id: 2,
        name: 'Friendly Robot',
        description: 'Friend Robot head with two eyes and a mouth',
        price: 945.0,
        imageName: 'assets/images/robot-head.jpeg',
        catagory: 'Head',
        discount: 0.2,
      },
      {
        id: 3,
        name: 'Friendly Robot',
        description: 'Friend Robot legs with two eyes and a mouth',
        price: 980.0,
        imageName: 'assets/images/robot-leg.jpeg',
        catagory: 'legs',
        discount: 0.2,
      },
      {
        id: 4,
        name: 'Friendly Robot',
        description: 'Friend Robot arm with two eyes and a mouth',
        price: 1023.0,
        imageName: 'assets/images/robot-arm.jpeg',
        catagory: 'arms',
        discount: 0.2,
      },
    ];
  }
}
