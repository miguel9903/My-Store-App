import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model: string = '';
  modelName: string = '';
  results: any[] = [];
  loading: boolean = false;

  constructor( private activatedRoute: ActivatedRoute,
               private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.model = params.model;
      this.getModelName();
      this.getModels();
    });
  }

  deleteModel(id: string, pos: number): void {
    Swal.fire({
      title: `Eliminar ${this.modelName}`,
      text: `Está seguro de eliminar este ${this.modelName}?`, 
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.results.splice(pos, 1);
        this.productsService.deleteModel(this.model, id)
            .subscribe((resp: any) => {
              Swal.fire({
                title: 'Eliminado',
                text: `${this.modelName} eliminado exitosamente`,
                icon: 'success'
              });
            }, (err: any) => {
              let error = err.error.errors ? err.error.errors[0].msg : err.error.message;
              Swal.fire({
                title: 'Error al guardar',
                text: error,
                icon: 'error',
              });
            });
      } 
    });
  }

  getModels(): void {
    this.loading = true;
    this.productsService.getModels(this.model)
        .subscribe((resp: any) => {
          let results: any = {};         
          if(this.model === 'products') {
            results = resp.products;
          } else if(this.model === 'categories') {
            results = resp.categories;
          } else if(this.model === 'subcategories') {
            results = resp.subcategories;
          } else if(this.model === 'genders') {
            results = resp.genders;
          } else if(this.model === 'brands') {
            results = resp.brands;
          } else if(this.model === 'colors') {
            results = resp.colors;
          }
          this.results = results;
          this.loading = false;
        });
  }

  getModelName(): void {
    if(this.model === 'products') {
      this.modelName = 'Producto';
    } else if(this.model === 'users') {
      this.modelName = 'Usuario';
    } else if(this.model === 'categories') {
      this.modelName = 'Categoría';
    } else if(this.model === 'subcategories') {
      this.modelName = 'Subcategoría';
    } else if(this.model === 'genders') {
      this.modelName = 'Género';
    } else if(this.model === 'brands') {
      this.modelName = 'Marca';
    } else if(this.model === 'colors') {
      this.modelName = 'Color';
    }
  }

}
