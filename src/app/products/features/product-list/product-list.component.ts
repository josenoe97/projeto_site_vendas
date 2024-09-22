import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/product-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductsStateService],
})

export default class ProductListComponent {
  productsState = inject(ProductsStateService);

  changePage(){
    this.productsState.changePage$.next(2);
  }
}



