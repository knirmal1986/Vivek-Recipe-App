import { RecipeserviceService } from './../recipeservice.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]
  constructor(private recipeListService: RecipeserviceService) { }

  ngOnInit() {
      this.recipes = this.recipeListService.getRecipes();
  }

  onNewRecipe(){

  }
}
