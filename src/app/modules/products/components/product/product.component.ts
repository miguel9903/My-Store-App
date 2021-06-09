import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Color, Gender, Subcategory } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor( private router: Router ) {

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

  ngOnInit(): void { }

  viewProductDetail(id: string): void {
    this.router.navigate(['/products', id]);
  }

}
