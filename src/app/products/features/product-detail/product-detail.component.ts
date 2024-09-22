import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../data-access/products.service';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {

  productDetailState = inject(ProductDetailStateService).state;

  id = input.required<string>();

  constructor(){
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id());
    })
  }

}
