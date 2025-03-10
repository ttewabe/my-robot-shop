// catalog.component.ts
import { Component } from '@angular/core';
import { IProduct } from './product.module';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Advanced Robot Head',
        description: 'High-tech robotic head with sensors',
        price: 1200.0,
        imageName: 'assets/images/robot-head.jpeg',
        catagory: 'Head',
        discount: 0.1,
      },
      {
        id: 2,
        name: 'Friendly Robot Head',
        description: 'Friend Robot head with two eyes and a mouth',
        price: 945.0,
        imageName: 'assets/images/robot-head1.jpeg',
        catagory: 'Head',
        discount: 0,
      },
      {
        id: 3,
        name: 'Strong Robot Legs',
        description: 'Powerful legs with high mobility',
        price: 1050.0,
        imageName: 'assets/images/robot-leg.jpeg',
        catagory: 'Legs',
        discount: 0.15,
      },
      {
        id: 4,
        name: 'Friendly Robot Legs',
        description: 'Friend Robot legs with two eyes and a mouth',
        price: 980.0,
        imageName: 'assets/images/robot-leg1.jpeg',
        catagory: 'Legs',
        discount: 0,
      },
      {
        id: 5,
        name: 'Advanced Robot Arms',
        description: 'High-tech robotic arms with precision control',
        price: 1100.0,
        imageName: 'assets/images/robot-arm.jpeg',
        catagory: 'Arms',
        discount: 0.12,
      },
      {
        id: 6,
        name: 'Friendly Robot Arm',
        description: 'Friend Robot arm with two eyes and a mouth',
        price: 1023.0,
        imageName: 'assets/images/robot-arm1.jpeg',
        catagory: 'Arms',
        discount: 0,
      },
    ];
  }

  getFilteredProducts() {
    return this.filter === '' || this.filter === 'All'
      ? this.products
      : this.products.filter(
          (product: any) => product.catagory === this.filter,
        );
  }
}
