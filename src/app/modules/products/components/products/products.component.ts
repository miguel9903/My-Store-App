import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand.model';
import { Color } from 'src/app/models/color.model';
import { Gender } from 'src/app/models/gender.model';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  genders: Gender[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];

  loading: boolean = false;

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void { 
    this.getModels('products');
    this.getModels('genders');
    this.getModels('brands');
    this.getModels('colors');
  }

  getModels(collection: string): void {
    this.loading = true;
    this.productsService.getModels(collection)
        .subscribe((resp: any) => {
          if(collection === 'products') {
            this.products = resp.products;
          } else if(collection === 'genders') {
            this.genders = resp.genders;
          } else if(collection === 'brands') {
            this.brands = resp.brands;
          } else if(collection === 'colors') {
            this.colors = resp.colors;
          }
          this.loading = false;
        });
  }
}
