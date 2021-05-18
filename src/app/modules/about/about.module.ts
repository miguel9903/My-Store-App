import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { AboutRoutingModule } from './about-routing.module'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule
    ]
})
export class AboutModule { }