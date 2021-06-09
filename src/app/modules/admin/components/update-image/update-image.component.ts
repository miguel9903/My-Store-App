import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {

  id: string = '';
  model: string = '';
  modelName: string = '';
  capturedFile: any;

  constructor( private actvatedRoute: ActivatedRoute,
               private productsService: ProductsService,
               private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.actvatedRoute.params
        .subscribe(params => {
          this.model = params.model;
          this.id = params.id;
          this.getModelName();
        });
  }

  updateImage(): void {

    try {
      
      const formData = new FormData();
      formData.append('file', this.capturedFile);
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere por favor...',
        icon: 'info',
      });
      Swal.showLoading();

      this.productsService.updateImage(this.model, this.id, formData)
          .subscribe((resp: any) => {
            Swal.fire({
              title: 'Guardado',
              text: `Imagen de ${this.modelName} actualizada exitosamente`,
              icon: 'success'
            });

          }, (err: any) => {
            let error = err.error.errors ? err.error.errors[0].msg : err.error.message;
            Swal.fire({
              title: 'Error al actualizar imagen',
              text: error,
              icon: 'error',
            });
        }); 

    } catch(err) {
      console.log(err);
    }

  }

  fileChange(e: any): void {
    this.capturedFile = e.target.files[0];
  }

  hasCapturedFiles(): boolean {
    return this.capturedFile ? true : false;
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
