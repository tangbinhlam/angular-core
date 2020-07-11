import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent
  },
  {
    path: 'edit',
    component: ShoppingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {

}
