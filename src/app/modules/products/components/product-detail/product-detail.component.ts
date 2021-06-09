import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor( private activatedRoute: ActivatedRoute,
               private productService: ProductsService ) { 
    this.product = {
      _id: '',
      name: '',
      description: '',
      price: 0,
      color: [],
      brand: { _id: '', name: '' },
      gender: { _id: '', name: '' },
      subcategory: { _id: '', name: '' },
      available: true,
      image: ''
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productService.getModel('products', params.id)
          .subscribe((resp: any) => {
            this.product = resp;
            console.log(this.product);
          });
    });
  }

}
