import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../domain';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      name: 'Batch-cook',
      description: '7 brilliant batch-cook recipes: great ways to fill the freezer',
      imagePath: `https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
