import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]  
})
export class HomeModule {}