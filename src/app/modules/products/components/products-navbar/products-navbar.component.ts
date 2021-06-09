import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  categories: Category[] = [];

  constructor( private productService: ProductsService ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productService.getModels('categories')
        .subscribe((resp: any) => {
          this.categories = resp.categories;
        });
  }

}
