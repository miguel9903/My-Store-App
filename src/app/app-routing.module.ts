import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LayoutComponent } from './modules/layout/layout.component';
import { PageNotFoundRoutingModule } from './modules/page-not-found/page-not-found-routing.module';

const routes: Routes = [
    { 
        path: '', 
        component: LayoutComponent,
        children: [
            { 
                path: 'home', 
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'about',
                loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
            },
            {
                path: 'contact',
                // canActivate: [AdminGuard],
                loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }