import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void { }

}
