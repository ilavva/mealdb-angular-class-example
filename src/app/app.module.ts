import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { RoutingDemoComponent } from './routing-demo/routing-demo.component';

import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodDishesDetailedViewComponent } from './food-dishes-detailed-view/food-dishes-detailed-view.component';
import { FoodInstructionsDetailedViewComponent } from './food-instructions-detailed-view/food-instructions-detailed-view.component';
import { FoodCategoryCardComponent } from './food-category-card/food-category-card.component';
import { FoodCategoriesGalleryComponent } from './food-categories-gallery/food-categories-gallery.component';
import { FoodCategoryViewComponent } from './food-category-view/food-category-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MealsGalleryComponent } from './meals-gallery/meals-gallery.component';
import { MealCardComponent } from './meal-card/meal-card.component';

// Import Angular Material modules
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // If using buttons
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,

    RoutingDemoComponent,

    FoodCategoriesComponent,
    FoodDishesDetailedViewComponent,
    FoodInstructionsDetailedViewComponent,
    FoodCategoryCardComponent,
    FoodCategoriesGalleryComponent,
    FoodCategoryViewComponent,
    MealsGalleryComponent,
    MealCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
