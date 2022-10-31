import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  faCocktail = faMartiniGlassCitrus;
  footerType: string = 'absFooter';
  drinks: any[] = [];

  ngOnInit(): void {
    const ingredient = this.route.snapshot.paramMap.get('ingredient')!;

    this.apiService
      .searchCocktailByIngredient(ingredient)
      .subscribe((data: any) => {
        this.drinks = data.drinks;
      });
  }
}
