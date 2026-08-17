import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product-service';
import { Product } from '../../Services/product-data-type';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  constructor(private route: ActivatedRoute, private product: ProductService) {

  }
  productData = signal<Product | undefined>(undefined)
  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id')
    this.product.getProducts().subscribe((data) => {
      // console.log(data.products);
      data.products.filter((item) => {
        if (item.id.toString() == productId) {

          console.log(item);
          this.productData.set(item);
        }
      })
    })
  }
}
