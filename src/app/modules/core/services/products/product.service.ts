import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

  constructor() { 

    this.products = [
      {
        id: 1,
        name: 'Camiseta',
        description: 'Camiseta Azul de Platzi',
        price: 129000,
        image: 'assets/images/camiseta.png'
      },
      {
        id: 2,
        name: 'Hoodie',
        description: 'Buzo Azul del Platzi',
        price: 259000,
        image: 'assets/images/hoodie.png'
      },
      {
        id: 3,
        name: 'Mug',
        description: 'Mug Blanco de Platzi',
        price: 65000,
        image: 'assets/images/mug.png'
      },
      {
        id: 4,
        name: 'Pin',
        description: 'Pins Metálicos de Platzi',
        price: 25000,
        image: 'assets/images/pin.png'
      },
      {
        id: 5,
        name: 'Stickers pequeños',
        description: 'Stickers Pequeños de Platzi',
        price: 10000,
        image: 'assets/images/stickers1.png'
      },
      {
        id: 6,
        name: 'Stickers grandes',
        description: 'Stickers Grandes de Platzi',
        price: 10000,
        image: 'assets/images/stickers2.png'
      }
    ];

  }
  
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): any {
    return this.products.find(p => p.id === id);
  }

}
