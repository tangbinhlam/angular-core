import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../domain/models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem($event: Recipe) {

  }
}
