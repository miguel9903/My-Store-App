import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand.model';
import { Color } from 'src/app/models/color.model';
import { Gender } from 'src/app/models/gender.model';
import { Subcategory } from 'src/app/models/subcategory.model';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  model: string = '';
  modelName: string = 'hola';
  loading: boolean = false;
  genders: Gender[] = []; 
  brands: Brand[] = [];
  colors: Color[] = [];
  subcategories: Subcategory[] = [];
  modelForm: FormGroup;
  selectedColors: string[] = [];
  selectedSubcategories: string[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private productsService: ProductsService,
               private formBuilder: FormBuilder ) { 

    this.activatedRoute.params.subscribe(params => {
        this.model = params.model;
        this.getModelName();
    });

    if(this.model === 'products') {

        this.modelForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          description: ['', [Validators.required]],
          price: ['', [Validators.required]],
          brand: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          color: this.formBuilder.array([]),
          subcategory: ['', [Validators.required]],
          image: ['https://res.cloudinary.com/dgxcs0tsd/image/upload/v1622969872/MyStore-App/Products/no-image_itpopu.jpg']
        });  

        this.getModels('genders');
        this.getModels('brands');
        this.getModels('colors');
        this.getModels('subcategories');

    } else if(this.model === 'categories') {
      
        this.modelForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          subcategories: this.formBuilder.array([]),
        }); 

        this.getModels('subcategories');

    } else if(this.model === 'users') {

        this.modelForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required]],
          password: ['', [Validators.required]],
          role: ['"ADMIN_ROLE"']
        });  

    } else {

        this.modelForm = this.formBuilder.group({
          name: ['', [Validators.required]]
        }); 

    }

  }

  ngOnInit(): void { }

  get arrayColors(): FormArray {
    return this.modelForm.get('color') as FormArray;
  }

  get arraySubcategories(): FormArray {
    return this.modelForm.get('subcategories') as FormArray;
  }

  validateField(field: string): any {
    return this.modelForm.get(field)?.invalid && this.modelForm.get(field)?.touched; 
  }

  addColor(id: string, e: any) {
    if(e.target.checked) {
      this.arrayColors.push(this.formBuilder.control(id));
    } else {
      const index = this.arrayColors.controls.findIndex(control => control.value === id);
      this.arrayColors.removeAt(index);
    }
  }

  addSubcategory(id: string, e: any): void {
    if(e.target.checked) {
      this.arraySubcategories.push(this.formBuilder.control(id));
    } else {
      const index = this.arraySubcategories.controls.findIndex(control => control.value === id);
      this.arraySubcategories.removeAt(index);
    }
  }

  create(): void {

    if(this.modelForm.invalid) {
      Object.values(this.modelForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }
    
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info',
    });
    Swal.showLoading();

    this.productsService.createModel(this.model, this.modelForm.value)
        .subscribe((resp: any) => {
          Swal.fire({
            title: 'Guardado',
            text: `${this.modelName} guardado exitosamente`,
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

  getModels(collection: string): void {
    this.productsService.getModels(collection)
        .subscribe((resp: any) => {
          if(collection === 'subcategories') {
            this.subcategories = resp.subcategories;
          } else if(collection === 'genders') {
            this.genders = resp.genders;
          } else if(collection === 'brands') {
            this.brands = resp.brands;
          } else if(collection === 'colors') {
            this.colors = resp.colors;
          }
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
