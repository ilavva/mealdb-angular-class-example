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
  searchStr: string = '';
  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {
    this.foodService.getCategoriesFromAPI();

    this.foodService.getTheCategoriesSubject().subscribe((infoOfCategories) => {
      this.categoriesArr = (
        infoOfCategories as CategoriesWeGetFromAPI
      ).categories;
    });
  }

  searchTextChanged(strToSearch: string) {
    this.searchStr = strToSearch;
  }
  isToBeDisplayed(strCategory: string) {
    if (strCategory.toLowerCase().includes(this.searchStr.toLowerCase())) {
      return true;
    }
    return false;
  }
}
