import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor( private router: Router ) {

    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: ''
    }
    
  }

  ngOnInit(): void {
  }

  viewProductDetail(id: number): void {
    this.router.navigate(['/products', id]);
  }

}
