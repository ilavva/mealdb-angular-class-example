import { Component, OnInit } from '@angular/core';
import { DataMealInstructionsFromAPI, MealInstruction } from '../types';
import { FoodService } from '../food.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-food-instructions-detailed-view',
  templateUrl: './food-instructions-detailed-view.component.html',
  styleUrls: ['./food-instructions-detailed-view.component.css'],
})
export class FoodInstructionsDetailedViewComponent implements OnInit {
  idMeal?: string;
  mealInstruction?: MealInstruction;
  arrInstrunctions?: string[];
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let temp = params.get('idMeal');
      this.idMeal = temp ? temp : 'NA';

      this.foodService.getMealInstrunctionFromAPI(this.idMeal);
    });
    this.foodService
      .getInstructionsSubject()
      .subscribe((dataOfInstrunctionFromAPI) => {
        this.mealInstruction = (
          dataOfInstrunctionFromAPI as DataMealInstructionsFromAPI
        ).meals[0];
        console.log(this.mealInstruction);
        this.formatInstrunctions();
      });
  }

  formatInstrunctions() {
    if (this.mealInstruction) {
      let instr = this.mealInstruction.strInstructions.split('.');
      this.arrInstrunctions = instr;
    } else {
      this.arrInstrunctions = [''];
    }
  }
}
