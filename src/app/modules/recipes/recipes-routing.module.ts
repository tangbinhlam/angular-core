import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent
  },
  {
    path: 'edit',
    component: RecipeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
