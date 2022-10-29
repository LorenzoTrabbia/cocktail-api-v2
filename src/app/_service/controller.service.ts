import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor() {}

  selectedLetter: string = 'A';
  selectedRandomDrink: any;
  ascendent: boolean = true;
  isDisabled: string = '';
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

  setLanguage(language: string) {
    this.language = language;
  }
}
