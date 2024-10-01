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
    this.categoryDishesId = this.route.snapshot.params['id'];

    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('id');
      this.categoryDishesId = temp ? temp : 'NA';
      this.foodService.getMealDishesOfCategoryFromAPI(this.categoryDishesId);
    });

    this.foodService
      .getTheMealDishesOfCategorySubject()
      .subscribe((dataOfDishMealsFromAPI) => {
        this.categoryDishesArr = (
          dataOfDishMealsFromAPI as DataOfDishMealsFromAPI
        ).meals;
      });
  }
}
