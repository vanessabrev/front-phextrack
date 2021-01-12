import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly api = environment.apiUrl;

  private productsSubject = new Subject<Array<Product>>();
  product$ = this.productsSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.httpClient.get<Array<Product>>(`${this.api}/products`)
      .toPromise().then((products: Array<Product>) => {
        this.productsSubject.next(products);
      });
  }

}