import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor() {}

  selectedLetter: string = 'A';
  selectedRandomDrink: any;
  ascendent: boolean = false;
  isDisabled: string = '';
  drinkSearched: string = '';
  ingredientSelected: string = '';
  language: string = 'EN';

  setSelectedLetter(letter: string) {
    this.selectedLetter = letter;
  }

  setSelectedRandomDrink(drink: any) {
    this.selectedRandomDrink = drink;
  }

  setAscendent(ascendent: boolean) {
    this.ascendent = ascendent;
  }

  setIsDisabled(isDisabled: string) {
    this.isDisabled = isDisabled;
  }

  setDrinkSearched(drinkSearched: string) {
    this.drinkSearched = drinkSearched;
  }

  setIngredientSelected(ingredientSelected: string) {
    this.ingredientSelected = ingredientSelected;
  }

  setLanguage(language: string) {
    this.language = language;
  }
}
