import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { CategoriesWeGetFromAPI, Category } from '../types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private foodService: FoodService, private router: Router) {}

  categoriesArr?: Category[]; //= //["Beef", "Chicken", "Cakes"];

  ngOnInit() {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject().subscribe((infoOfCategories) => {
      this.categoriesArr = (
        infoOfCategories as CategoriesWeGetFromAPI
      ).categories;
    });
  }

  userClickedCategory(categoryId: string) {
    this.router.navigate(['/food', categoryId]);
  }
}
