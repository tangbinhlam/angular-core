import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {ShoppingRoutingModule} from './shopping-routing.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
  ]
})
export class ShoppingModule {

}
