import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../domain';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Batch-cook',
      description: '7 brilliant batch-cook recipes: great ways to fill the freezer',
      imagePath: `https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg`
    }
  ];
  id = 2;
  constructor() {

  }

  ngOnInit(): void {
  }

  addRecipe() {
    this.recipes.push({
      id: this.id,
      name: 'Batch-cook',
      description: '7 brilliant batch-cook recipes: great ways to fill the freezer',
      imagePath: `https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg`
    });
    this.id++;
  }
}
