import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private categoriesSubject = new ReplaySubject(1); // Buffer size 1
  private mealDishesOfCategorySubject = new ReplaySubject(1);
  private mealInstructionSubject = new ReplaySubject(1);

  constructor(private http: HttpClient) {}

  getCategoriesFromAPI() {
    this.http
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .subscribe((theData) => {
        this.categoriesSubject.next(theData);
      });
  }

  getMealDishesOfCategoryFromAPI(category: string) {
    this.http
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .subscribe((theData) => {
        this.mealDishesOfCategorySubject.next(theData);
      });
  }

  getMealInstrunctionFromAPI(mealId: string) {
    this.http
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .subscribe((theData) => {
        this.mealInstructionSubject.next(theData);
      });
  }

  getTheCategoriesSubject() {
    return this.categoriesSubject;
  }

  getTheMealDishesOfCategorySubject() {
    return this.mealDishesOfCategorySubject;
  }

  getInstructionsSubject() {
    return this.mealInstructionSubject;
  }
}
