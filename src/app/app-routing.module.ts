import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { IngredientDetailComponent } from './pages/ingredientDetail/ingredientDetail.component';
import { DrinkResolver } from './_service/drink.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  {
    path: 'drink/:idDrink',
    component: DrinkComponent,
    resolve: { drink: DrinkResolver },
  },
  { path: 'search', component: SearchComponent },
  { path: 'ingredient/:ingredientName', component: IngredientDetailComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
