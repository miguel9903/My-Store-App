import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ListComponent } from './components/list/list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { UpdateImageComponent } from './components/update-image/update-image.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminNavComponent,
    LayoutAdminComponent,
    ListComponent,
    UserProfileComponent,
    CreateComponent,
    UpdateComponent,
    UpdateImageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
