import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: Products | undefined;
  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.productsServices.viewProduct().subscribe(data=>{
      this.productList= data;
    })
  }

}
