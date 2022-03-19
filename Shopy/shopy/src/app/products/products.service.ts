import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import{Products} from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any):Observable<Products> {
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post<Products>(baseUrl,productBody);
  }
  
  viewProduct(productId: string):Observable<Products>{
    const baseUrl="http://localhost:3000/products"+productId;
    return this.httpClient.get<Products>(baseUrl);
  }

  searchCategoryProduct(categoryId: string):Observable<Products>{
    const baseUrl="http://localhost:3000/products/category="+categoryId;
    return this.httpClient.get<Products>(baseUrl);
  }
  searchDateProduct(dateParam: string):Observable<Products>{
    const baseUrl="http://localhost:3000/products/date="+dateParam;
    return this.httpClient.get<Products>(baseUrl);
  }
  getCategory(){
    const categoryUrl="http://localhost:3000/categories"
    return this.httpClient.get<Category>(categoryUrl);
  }
}
