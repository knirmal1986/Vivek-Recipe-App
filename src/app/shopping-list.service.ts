import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index:number){
    return this.ingredients[index]
  }

  deleteIngredient(index:number){
      this.ingredients.splice(index,1)
      console.log(this.ingredients)
      this.ingredientsChanged.next(this.ingredients)
  }
}
