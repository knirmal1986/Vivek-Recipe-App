import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';


const routes: Routes = [
  { path: '', redirectTo : 'auth', pathMatch: 'full'},
  { path: 'auth', component:AuthComponent},
  { path: 'recipes', component:RecipesComponent ,

  children: [
    { path: '', component: RecipeListComponent ,

    children:[
      { path: ':id', component: RecipeDetailComponent },
      ]
    },

  ]
  },
  { path: 'shopping-list', component:ShoppingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
