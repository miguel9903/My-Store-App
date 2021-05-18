import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';
;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductsService ) { }

  ngOnInit(): void { 
    this.products = this.productService.getProducts();
  }

}
