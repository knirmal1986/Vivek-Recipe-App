import { ShoppingListService } from './../../shopping-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f', { static: false }) slForm: NgForm;
  editMode : boolean = false
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      index => {
        //console.log(index)
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingListService.getIngredientByIndex(index)
        //console.log(this.editedItem)
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }
  onSubmit(f){
    if(this.editMode){
      this.editedItem.name = f.value.name
      this.editedItem.amount = f.value.amount
      this.shoppingListService.updateIngredient(this.editedItem,this.editedItemIndex)
      this.editMode= false
    }else{
      this.shoppingListService.addIngredient(new Ingredient(f.value.name,f.value.amount))
    }
      this.slForm.reset()
  }

  onDelete(){
      this.shoppingListService.deleteIngredient(this.editedItemIndex)
      this.slForm.reset()
      this.editMode= false
  }

  onClear(){
    this.slForm.reset()
    this.editMode= false
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
