import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/products';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList:Category| undefined;
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList= data;
    })
  }

}
