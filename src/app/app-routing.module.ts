import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: 'search', component: SearchComponent },
  { path: 'ingredient/:ingredientName', component: IngredientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
