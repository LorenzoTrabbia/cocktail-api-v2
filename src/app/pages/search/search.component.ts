import { Component } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(
    private apiService: ApiService,
    public controllerService: ControllerService
  ) {}

  faCocktail = faMartiniGlassCitrus;
  drinks: any[] = [];
  drink: string = '';
  ingredient: string = '';

  ingredients: string[] = [
    'Light rum',
    'Applejack',
    'Gin',
    'Dark rum',
    'Sweet Vermouth',
    'Strawberry schnapps',
    'Scotch',
    'Apricot brandy',
    'Triple sec',
    'Southern Comfort',
    'Orange bitters',
    'Brandy',
    'Lemon vodka',
    'Blended whiskey',
    'Dry Vermouth',
    'Amaretto',
    'Tea',
    'Champagne',
    'Coffee liqueur',
    'Bourbon',
    'Tequila',
    'Vodka',
    'Añejo rum',
    'Bitters',
    'Sugar',
    'Kahlua',
    'demerara Sugar',
    'Dubonnet Rouge',
    'Lime juice',
    'Irish whiskey',
    'Apple brandy',
    'Carbonated water',
    'Cherry brandy',
    'Creme de Cacao',
    'Grenadine',
    'Port',
    'Coffee brandy',
    'Red wine',
    'Rum',
    'Grapefruit juice',
    'Ricard',
    'Sherry',
    'Cognac',
    'Sloe gin',
    'Apple juice',
    'Pineapple juice',
    'Lemon juice',
    'Sugar syrup',
    'Milk',
    'Strawberries',
    'Chocolate syrup',
    'Yoghurt',
    'Mango',
    'Ginger',
    'Lime',
    'Cantaloupe',
    'Berries',
    'Grapes',
    'Kiwi',
    'Tomato juice',
    'Cocoa powder',
    'Chocolate',
    'Heavy cream',
    'Galliano',
    'Peach Vodka',
    'Ouzo',
    'Coffee',
    'Spiced rum',
    'Water',
    'Espresso',
    'Angelica root',
    'Orange',
    'Cranberries',
    'Johnnie Walker',
    'Apple cider',
    'Everclear',
    'Cranberry juice',
    'Egg yolk',
    'Egg',
    'Grape juice',
    'Peach nectar',
    'Lemon',
    'Firewater',
    'Lemonade',
    'Lager',
    'Whiskey',
    'Absolut Citron',
    'Pisco',
    'Irish cream',
    'Ale',
    'Chocolate liqueur',
    'Midori melon liqueur',
    'Sambuca',
    'Cider',
    'Sprite',
    '7-Up',
    'Blackberry brandy',
    'Peppermint schnapps',
    'Creme de Cassis',
  ];

  searchCocktail() {
    this.apiService.searchCocktailByName(this.drink).subscribe((data: any) => {
      this.drinks = data.drinks;
    });
  }

  searchCocktailByIngredient(ingredient: string) {
    this.apiService
      .searchCocktailByIngredient(ingredient)
      .subscribe((data: any) => {
        this.drinks = data.drinks;
      });
  }

  clickInput() {
    if (this.controllerService.isDisabled !== 'input') {
      if (this.drink.length === 0) {
        this.controllerService.setIsDisabled('');
      } else {
        this.controllerService.setIsDisabled('select');
      }
    }
  }

  clickSelect() {
    console.log(this.ingredient);

    if (this.controllerService.isDisabled !== 'select') {
      if (this.ingredient.length === 0) {
        this.controllerService.setIsDisabled('');
      } else {
        this.controllerService.setIsDisabled('input');
      }
    }
  }
}
