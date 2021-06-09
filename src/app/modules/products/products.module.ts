import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CutProductDescriptionPipe } from './pipes/cut-product-description.pipe';
import { JoinProductColorsPipe } from './pipes/join-product-colors.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsNavbarComponent } from './components/products-navbar/products-navbar.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductDetailComponent,
        CutProductDescriptionPipe,
        JoinProductColorsPipe,
        FilterComponent,
        ProductsNavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }