import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../domain/models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
