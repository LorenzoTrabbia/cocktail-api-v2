import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    public controllerService: ControllerService
  ) {}

  faCocktail = faMartiniGlassCitrus;
  drinks: any[] = [];
  drink: string = '';
  ingredient: string = '';
  footerType: string = 'absFooter';
  showInstructions: boolean = true;
  noResults: boolean = false;

  ingredients: string[] = [];

  ngOnInit() {
    this.apiService.getIngredientList().subscribe((data: any) => {
      data.drinks.map((ingredient: any) => {
        this.ingredients.push(ingredient.strIngredient1);
      });
    });

    if (this.controllerService.drinkSearched) {
      this.drink = this.controllerService.drinkSearched;
      this.searchCocktail();
    }

    if (this.controllerService.ingredientSelected) {
      this.ingredient = this.controllerService.ingredientSelected;
      this.searchCocktailByIngredient(this.ingredient);
    }
  }

  searchCocktail() {
    this.showInstructions = false;
    this.apiService.searchCocktailByName(this.drink).subscribe((data: any) => {
      this.drinks = data.drinks;
      if (this.drinks) {
        this.footerType = '';
      } else {
        this.noResults = true;
      }
    });
  }

  searchCocktailByIngredient(ingredient: string) {
    this.showInstructions = false;
    this.apiService
      .searchCocktailByIngredient(ingredient)
      .subscribe((data: any) => {
        this.drinks = data.drinks;
        if (this.drinks) {
          this.footerType = '';
        } else {
          this.noResults = true;
        }
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
    if (this.controllerService.isDisabled !== 'select') {
      if (this.ingredient.length === 0) {
        this.controllerService.setIsDisabled('');
      } else {
        this.controllerService.setIsDisabled('input');
      }
    }
  }

  resetFilters() {
    this.showInstructions = true;
    this.noResults = false;
    this.footerType = 'absFooter';
    this.drink = '';
    this.ingredient = '';
    this.drinks = [];
    this.controllerService.setIsDisabled('');
    this.controllerService.setDrinkSearched('');
    this.controllerService.setIngredientSelected('');
  }
}
