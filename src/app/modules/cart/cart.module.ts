import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule
    ]
})
export class CartModule { }