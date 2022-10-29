import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor() {}

  selectedLetter: string = 'A';
  selectedRandomDrink: any;
  ascendent: boolean = true;
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

  setLanguage(language: string) {
    this.language = language;
  }
}
