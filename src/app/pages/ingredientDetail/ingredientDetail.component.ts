import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './ingredientDetail.component.html',
  styleUrls: ['./ingredientDetail.component.scss'],
})
export class IngredientDetailComponent implements OnInit {
  faCocktail = faMartiniGlassCitrus;
  ingredient: any;

  drinks: any[] = [];

  constructor(
    private apiService: ApiService,
    public controllerService: ControllerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ingredientName = this.route.snapshot.paramMap.get('ingredientName')!;

    this.apiService
      .searchIngredientByName(ingredientName)
      .subscribe((data: any) => {
        this.ingredient = data.ingredients[0];
      });

    this.apiService
      .searchCocktailByIngredient(ingredientName)
      .subscribe((data: any) => {
        this.drinks = data.drinks;
      });
  }
}
