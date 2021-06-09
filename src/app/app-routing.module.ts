import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './modules/layout/layout.component';

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
                loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
            },
            {
                path: 'login',
                loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'products'
            }
        ]
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
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