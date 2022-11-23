import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class DrinkResolver implements Resolve<Observable<any>> {
  constructor(private service: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.service.searchCocktailById(route.paramMap.get('idDrink') || '');
  }
}
