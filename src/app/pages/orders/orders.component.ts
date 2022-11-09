import { Component } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  constructor(private apiService: ApiService, public route: ActivatedRoute) {}

  faCocktail = faMartiniGlassCitrus;
  footerType: string = 'btmFooter';
  drink: string = '';
  drinks: any[] = [];
  selectedDrinks: any[] = [];

  searchCocktail() {
    this.apiService.searchCocktailByName(this.drink).subscribe((data: any) => {
      this.drinks = data.drinks;
    });
  }

  onCardSelectChange(drink: any, $event: any) {
    drink.selected = $event;
    if ($event) {
      this.selectedDrinks.push(drink);
    } else {
      const index = this.selectedDrinks.indexOf(drink);
      if (index > -1) {
        this.selectedDrinks.splice(index, 1);
      }
    }
    if (this.selectedDrinks.length > 5) {
      alert('You can only select 5 drinks');
      drink.selected = false;
    }
  }
}
