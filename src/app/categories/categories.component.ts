import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

type CategoriesWeGetFromAPI = {
  categories: Category[]
};


type Category = {
  "idCategory": string,
  "strCategory": string,
  "strCategoryThumb": string,
  "strCategoryDescription": string
}


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  categoriesArr?: Category[]; //= //["Beef", "Chicken", "Cakes"];

  ngOnInit() {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject()
      .subscribe((infoOfCategories) => {
        this.categoriesArr = (infoOfCategories as CategoriesWeGetFromAPI).categories;
      });
  }

}
