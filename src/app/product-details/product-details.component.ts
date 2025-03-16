import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
