import { Component, OnInit } from '@angular/core';
import { CategoriesWeGetFromAPI, Category } from '../types';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-categories-gallery',
  templateUrl: './food-categories-gallery.component.html',
  styleUrls: ['./food-categories-gallery.component.css'],
})
export class FoodCategoriesGalleryComponent implements OnInit {
  categoriesArr?: Category[];

  constructor(private foodService: FoodService, private router: Router) {}
  ngOnInit(): void {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject().subscribe((infoOfCategories) => {
      this.categoriesArr = (
        infoOfCategories as CategoriesWeGetFromAPI
      ).categories;
    });
  }
}
