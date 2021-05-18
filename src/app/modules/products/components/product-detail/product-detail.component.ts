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
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: ''
    }

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.product = this.productService.getProduct(parseInt(params.id));
      console.log(this.product);
    });
  }

}
