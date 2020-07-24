import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Product from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'Cub',
      description: 'very good',
      date: new Date(),
      email: 'lamtang@gmail.com',
      amount: 500,
      price: 20,
      expireDate: new Date()
    },
  ];
  productForm: FormGroup;
  index = 500;
  extendProducts = [];

  constructor(public fb: FormBuilder) {
    this.generateData();
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required],
      expireDate: ['', Validators.required],
    });
  }

  onSave() {
    this.products.push({
      id: '' + this.index,
      name: 'Item ' + this.index,
      description: 'very good',
      date: new Date(),
      email: 'lamtang@gmail.com',
      amount: 500,
      price: 20,
      expireDate: new Date()
    });
    this.index++;
  }

  generateData() {
    for (let i = 10; i < 200; i++) {
      this.products.push({
        id: '' + i,
        name: 'Item ' + i,
        description: 'very good',
        date: new Date(),
        email: 'lamtang@gmail.com',
        amount: 500,
        price: 20,
        expireDate: new Date()
      });
    }

    this.extendProducts = this.products.map(item => {
        return {
          ...item,
          cal: {
            amount: item.amount,
            price: item.price,
          },
        };
      }
    );
  }

  calculate(product: Product) {
    console.log('calculateItem');
    return product.amount * product.price;
  }
}
