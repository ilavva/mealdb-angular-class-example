import { Component, Input, OnInit } from '@angular/core';

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

  constructor(private router: Router) {}
  ngOnInit(): void {}

  userClickedCategory(categoryId: string) {
    this.router.navigate(['/food', categoryId]);
  }
}
