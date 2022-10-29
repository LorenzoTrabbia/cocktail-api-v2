import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faCocktail = faMartiniGlassCitrus;
  drinks: any[] = [];
  alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor(
    private apiService: ApiService,
    public controllerService: ControllerService
  ) {}

  ngOnInit(): void {
    if (!this.controllerService.selectedRandomDrink) {
      this.apiService.getRandomCocktail().subscribe((data: any) => {
        this.controllerService.selectedRandomDrink = data.drinks[0];
      });
    }

    this.apiService
      .searchCocktailByFirstLetter(this.controllerService.selectedLetter)
      .subscribe((data: any) => {
        this.drinks = data.drinks;
        this.sortList();
      });
  }

  check(data: string) {
    if (data?.length > 250) {
      return data.substring(0, 250) + '...';
    } else {
      return data;
    }
  }

  filterFirstLetter(firstLetter: string) {
    this.controllerService.setSelectedLetter(firstLetter);
    this.apiService
      .searchCocktailByFirstLetter(firstLetter)
      .subscribe((data: any) => {
        this.drinks = data.drinks;
      });
  }

  sortList() {
    this.controllerService.setAscendent(!this.controllerService.ascendent);
    if (!this.controllerService.ascendent) {
      this.drinks.sort((a, b) => {
        if (a.strDrink.toLowerCase() < b.strDrink.toLowerCase()) {
          return -1;
        }
        if (a.strDrink > b.strDrink) {
          return 1;
        }
        return 0;
      });
    } else {
      this.drinks.sort((a, b) => {
        if (a.strDrink.toLowerCase() > b.strDrink.toLowerCase()) {
          return -1;
        }
        if (a.strDrink < b.strDrink) {
          return 1;
        }
        return 0;
      });
    }
  }
}
