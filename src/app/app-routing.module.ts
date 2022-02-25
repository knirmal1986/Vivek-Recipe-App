import { RecipesComponent } from './recipes/recipes.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo : 'auth', pathMatch: 'full'},
  { path: 'auth', component:AuthComponent},
  { path: 'recipes', component:RecipesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
