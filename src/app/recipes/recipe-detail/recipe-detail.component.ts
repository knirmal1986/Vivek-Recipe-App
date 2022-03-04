import { Recipe } from './../../shared/recipe.modal';
import { RecipeserviceService } from './../recipeservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  index: number
  recipe: Recipe
  constructor(private route: ActivatedRoute,
    private router:Router,
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
    this.recipeService.addToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route})
  }
  onDeleteRecipe(){

  }
}
