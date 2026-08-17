import { Component, signal } from '@angular/core';

import { ProductService } from '../../Services/product-service';
import { RouterLink } from '@angular/router';
import { Product } from '../../Services/product-data-type';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  constructor(private product: ProductService) {

  }
  productData = signal<Product[] | undefined>(undefined)

  ngOnInit() {
    this.product.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productData.set(data.products);
    })
  }
}
