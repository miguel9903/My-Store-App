import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutAdminComponent,
    children: [
      { 
        path: 'create', 
        component: ProductFormComponent 
      },
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: '',
        redirectTo: 'create'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

