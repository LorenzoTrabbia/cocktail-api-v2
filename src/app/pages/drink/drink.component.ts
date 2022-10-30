import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  faCocktail = faMartiniGlassCitrus;
  drink: any = {
    name: '',
    thumb: '',
    category: '',
    glass: '',
    instructions: [],
    ingredients: [],
  };

  constructor(
    private apiService: ApiService,
    public controllerService: ControllerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;

    this.apiService.searchCocktailById(id).subscribe((data: any) => {
      this.drink.name = data.drinks[0].strDrink;
      this.drink.thumb = data.drinks[0].strDrinkThumb;
      this.drink.category = data.drinks[0].strCategory;
      this.drink.glass = data.drinks[0].strGlass;
      Object.keys(data.drinks[0]).forEach((key) => {
        if (key.includes('strIngredient') && data.drinks[0][key]) {
          const index = key.replace('strIngredient', '');
          this.drink.ingredients.push({
            name: data.drinks[0][key],
            measure: data.drinks[0][`strMeasure${index}`],
          });
        }
        if (key.includes('strInstructions') && data.drinks[0][key]) {
          let lang = key.replace('strInstructions', '');
          if (!lang) {
            lang = 'EN';
          }
          this.drink.instructions[lang] = data.drinks[0][key];
        }
      });
    });
  }

  changeLanguage(lang: string) {
    this.controllerService.setLanguage(lang);
  }
}
