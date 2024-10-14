import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Category } from '../types';

@Component({
  selector: 'app-food-category-card',
  templateUrl: './food-category-card.component.html',
  styleUrls: ['./food-category-card.component.css'],
})
export class FoodCategoryCardComponent implements OnInit {
  @Input()
  foodCategory?: Category;
  choosenCategory: string;
  @Output() sendCategoryToParent = new EventEmitter<Category>();

  constructor(private router: Router) {
    this.choosenCategory = '';
  }
  ngOnInit(): void {}

  userClickedFoodCategory(categoryId: string) {
    console.log('/food-gallery', categoryId);
    this.choosenCategory = categoryId;
    this.router.navigate(['/food-gallery', categoryId]);
    this.sendCategoryToParent.emit(this.foodCategory);
  }
}
