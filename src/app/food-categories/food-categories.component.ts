import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import {
  CategoriesWeGetFromAPI as FoodCategoriesWeGetFromAPI,
  Category,
} from '../types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css'],
})
export class FoodCategoriesComponent implements OnInit {
  constructor(private foodService: FoodService, private router: Router) {}

  categoriesArr?: Category[]; //= //["Beef", "Chicken", "Cakes"];

  ngOnInit() {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject().subscribe((infoOfCategories) => {
      this.categoriesArr = (
        infoOfCategories as FoodCategoriesWeGetFromAPI
      ).categories;
    });
  }

  userClickedCategory(categoryId: string) {
    this.router.navigate(['/food', categoryId]);
  }
}
