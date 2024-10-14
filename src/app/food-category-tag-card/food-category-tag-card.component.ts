import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../types';

@Component({
  selector: 'app-food-category-tag-card',
  templateUrl: './food-category-tag-card.component.html',
  styleUrls: ['./food-category-tag-card.component.css'],
})
export class FoodCategoryTagCardComponent {
  @Input()
  foodCategory!: Category;

  @Output() clickedCategory = new EventEmitter<Category>();

  ngOnInit(): void {}
  userClickedFoodCategoryTag() {
    this.clickedCategory.emit(this.foodCategory);
  }
}
