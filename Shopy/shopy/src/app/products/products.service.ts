import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any) {
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post(baseUrl,productBody);
  }
  
  viewProduct(productId: string){
    const baseUrl="http://localhost:3000/products"+productId;
    return this.httpClient.get(baseUrl);
  }
}
