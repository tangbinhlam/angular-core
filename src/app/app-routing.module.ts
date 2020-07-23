import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/shared/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    loadChildren: () => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
