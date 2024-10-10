import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { CategoriesWeGetFromAPI, Category } from '../types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css'],
})
export class FoodCategoriesComponent implements OnInit {
  constructor(private foodService: FoodService, private router: Router) {
    this.choosenCategory = '';
  }

  categoriesArr?: Category[]; //= //["Beef", "Chicken", "Cakes"];
  choosenCategory: string;

  ngOnInit() {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject().subscribe((infoOfCategories) => {
      this.categoriesArr = (
        infoOfCategories as CategoriesWeGetFromAPI
      ).categories;
    });
  }

  userClickedCategory(categoryId: string) {
    this.choosenCategory = categoryId;
    this.router.navigate(['/food', categoryId]);
  }
}
