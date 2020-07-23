import { Pipe, PipeTransform } from '@angular/core';
import Product from './models/product.model';

@Pipe({
  name: 'calculate',
  pure: true,
})
export class CalculatePipe implements PipeTransform {

  transform(value: Product, ...args: string[]): number {
    console.log('calculateItem');
    return value.price * value.amount;
  }

}
