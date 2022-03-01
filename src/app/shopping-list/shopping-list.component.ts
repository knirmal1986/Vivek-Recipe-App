import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.ingredients)
    this.subscription =  this.shoppingListService.ingredientsChanged.subscribe(
      items => {
        console.log(items)
        this.ingredients = items
      }
    )
  }

  onEditItem(index){
    console.log(this.ingredients[index])
    this.shoppingListService.startedEditing.next(index)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
