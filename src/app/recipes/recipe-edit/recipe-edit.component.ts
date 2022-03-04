import { Recipe } from 'src/app/shared/recipe.modal';
import { RecipeserviceService } from './../recipeservice.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editedRecipeItem : Recipe
  editedRecipeIndex : number
  editMode = false;
  recipeForm: FormGroup;
  constructor(private activatedRoute :ActivatedRoute,
    private recipeService : RecipeserviceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param:Params) => {
        this.editedRecipeIndex = param['id'];
        this.editMode = param['id'] != null
        this.initForm();
      }
    )

  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.editedRecipeItem = this.recipeService.getRecipeById(this.editedRecipeIndex);
      recipeName = this.editedRecipeItem.name;
      recipeImagePath = this.editedRecipeItem.imagePath;
      recipeDescription = this.editedRecipeItem.description;
      if (this.editedRecipeItem['ingredients']) {
        for (let ingredient of this.editedRecipeItem.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
      //end of If Block

      this.recipeForm = new FormGroup({
        name: new FormControl(recipeName, Validators.required),
        imagePath: new FormControl(recipeImagePath, Validators.required),
        description: new FormControl(recipeDescription, Validators.required),
        ingredients: recipeIngredients
      })
    }
  }

  onSubmit(){

  }

  onCancel(){

  }

  get ingredients() : FormArray {
    return this.recipeForm.get("ingredients") as FormArray
  }

  onDeleteIngredient (index : number){

  }

  onAddIngredient(){

  }
}
