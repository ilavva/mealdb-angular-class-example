import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private categoriesSubject = new ReplaySubject(1); // Buffer size 1

  constructor(private http: HttpClient) { }

  getCategoriesFromAPI() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .subscribe((theData) => {
        this.categoriesSubject.next(theData);
      })
  }

  getTheCategoriesSubject() {
    return this.categoriesSubject;
  }
}
