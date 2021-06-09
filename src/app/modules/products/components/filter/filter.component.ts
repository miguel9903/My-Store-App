import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() name: string = '';
  @Input() collection: string = '';
  @Input() showBrowser: boolean = false;

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void { }

  search(term: string): void {
    if(term.length > 0) {
      this.productsService.search(this.collection, term)
          .subscribe(resp => {
            this.options = resp.results;
           });
    } else {
      this.productsService.getModels(this.collection)
          .subscribe((resp: any) => {
            if(this.collection === 'brands') {
              this.options = resp.brands
            } else {
              this.options = resp.colors;      
            }
          });
    }
  } 

}
