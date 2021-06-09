import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { UpdateImageComponent } from './components/update-image/update-image.component';


const routes: Routes = [
  { 
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'list/:model',
        component: ListComponent
      },
      {
        path: 'create/:model',
        component: CreateComponent
      },
      {
        path: 'update/:model/:id',
        component: UpdateComponent
      },
      {
        path: 'update-image/:model/:id',
        component: UpdateImageComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: '',
        redirectTo: 'list/products'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

