import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { DataOfDishMealsFromAPI, MealDish } from '../types';

@Component({
  selector: 'app-food-category-view',
  templateUrl: './food-category-view.component.html',
  styleUrls: ['./food-category-view.component.css'],
})
export class FoodCategoryViewComponent {
  categoryId?: string;
  categoryMealsArr?: MealDish[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('categoryId');
      this.categoryId = temp ? temp : 'NA';
      console.log(
        `URL categoryId CHANGED ${new Date(Date.now()).toLocaleString()}`
      );
      this.foodService.getMealDishesOfCategoryFromAPI(this.categoryId);
    });
    console.log(
      `subscribing to MealDishes ${new Date(Date.now()).toLocaleString()}`
    );
    this.foodService
      .getTheMealDishesOfCategorySubject()
      .subscribe((dataOfDishMealsFromAPI) => {
        console.log(
          `subscre  TheMealDishes wasCALLED ${new Date(
            Date.now()
          ).toLocaleString()}`
        );

        this.categoryMealsArr = (
          dataOfDishMealsFromAPI as DataOfDishMealsFromAPI
        ).meals;
      });
  }
}
