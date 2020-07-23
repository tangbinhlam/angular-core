import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../../domain';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 10,
    },
    {
      name: 'chili',
      amount: 2,
    },
    {
      name: 'fish',
      amount: 1,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
