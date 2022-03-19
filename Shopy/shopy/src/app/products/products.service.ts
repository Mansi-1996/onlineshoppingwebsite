import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  createProduct(ProductBody){
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post(baseUrl,ProductBody);
  }
}
