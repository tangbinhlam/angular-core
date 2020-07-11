import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AbstractNgModelComponent} from './abstract-ng-model.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AbstractNgModelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    AbstractNgModelComponent,
  ]
})
export class HeaderModule {

}
