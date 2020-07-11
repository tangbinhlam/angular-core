import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
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
