import { Pipe, PipeTransform } from '@angular/core';
import Product from './models/product.model';
import memo from 'memo-decorator';

@Pipe({
  name: 'calculate',
  pure: true,
})
export class CalculatePipe implements PipeTransform {

  @memo()
  transform(value: { amount: number; price: number}, ...args: string[]): number {
    console.log('calculateItem');
    return  value.amount  * value.price;
  }

}
