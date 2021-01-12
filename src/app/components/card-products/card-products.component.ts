import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {

  listProducts: Array<Product>;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.setListProducts();
  }

  setListProducts(): void {
    this.productService.product$
      .subscribe(products => this.listProducts = products);
  }
}
