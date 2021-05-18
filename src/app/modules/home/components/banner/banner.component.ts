import { AfterViewInit, Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  swiper: any;
  images: string[];

  constructor() { 

    this.images = [
      'assets/images/banner-1.jpg',
      'assets/images/banner-2.jpg',
      'assets/images/banner-3.jpg'
    ];

  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container');
  }

  swiperPrev(): void {
    this.swiper.slidePrev();
  }

  swiperNext(): void {
    this.swiper.slideNext();
  }

}
