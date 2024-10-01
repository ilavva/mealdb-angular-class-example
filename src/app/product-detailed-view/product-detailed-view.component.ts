import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent {

  productId?: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.productId = this.route.snapshot.params['id'];

    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('id');
      this.productId = temp ? +temp : -1;
      // this.productId = params.get('id') ? +params.get('id') : -1;
    });
  }

}
