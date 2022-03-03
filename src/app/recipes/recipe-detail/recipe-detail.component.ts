import { Recipe } from './../../shared/recipe.modal';
import { RecipeserviceService } from './../recipeservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  index: number
  recipe: Recipe
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          console.log(params['id'])
          this.index = params['id']
         this.recipe = this.recipeService.getRecipeById(this.index)
         console.log(this.recipe)
      }
    )
  }

  onAddToShoppingList(){

  }
  onEditRecipe(){

  }
  onDeleteRecipe(){

  }
}
