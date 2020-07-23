import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsRoutingModule} from './products.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CalculatePipe } from './calculate.pipe';


@NgModule({
  declarations: [ProductListComponent, CalculatePipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule {
}
