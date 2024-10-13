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

  searchButtonClicked(searchValue: string) {
    console.log('search for:', searchValue);
    this.searchStr = searchValue;
  }
  searchTextChanged(arg0: string) {
    this.searchStr = arg0;
  }
  searchMath(strInDB: string) {
    if (strInDB.toLowerCase().includes(this.searchStr.toLowerCase())) {
      return true;
    }
    return false;
  }
}
