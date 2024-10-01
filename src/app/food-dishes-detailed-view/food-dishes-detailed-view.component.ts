import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataOfDishMealsFromAPI, MealDish } from '../types';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-dishes-detailed-view',
  templateUrl: './food-dishes-detailed-view.component.html',
  styleUrls: ['./food-dishes-detailed-view.component.css'],
})
export class FoodDishesDetailedViewComponent {
  categoryDishesId?: string;
  categoryDishesArr?: MealDish[];
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('categoryId');
      this.categoryDishesId = temp ? temp : 'NA';
      console.log(`UTL CHANGED ${new Date(Date.now()).toLocaleString()}`);
      this.foodService.getMealDishesOfCategoryFromAPI(this.categoryDishesId);
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

        this.categoryDishesArr = (
          dataOfDishMealsFromAPI as DataOfDishMealsFromAPI
        ).meals;
      });
  }
}
