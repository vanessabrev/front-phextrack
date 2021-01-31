import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductService } from 'src/app/services/api/product.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {

  listProducts: Array<ProductModel>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.setListProducts();
  }

  setListProducts(): void {
    this.productService.product$
      .subscribe(products => this.listProducts = products);
  }
}
