import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', price: 10, id: 1 },
    { name: 'Product 2', price: 20, id: 2 },
    { name: 'Product 3', price: 30, id: 3 },
  ];

  constructor(private router: Router) { }

  userClickedAProduct(productId: number) {
    this.router.navigate(['/products', productId]);
  }

}
