import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    AdminNavComponent,
    LayoutAdminComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
