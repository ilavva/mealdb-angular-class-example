import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactusComponent } from './contactus/contactus.component';

import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { FoodCategoryCardComponent } from './food-category-card/food-category-card.component';
import { FoodCategoriesGalleryComponent } from './food-categories-gallery/food-categories-gallery.component';
import { FoodCategoryViewComponent } from './food-category-view/food-category-view.component';

const routes: Routes = [
  // user types as path    component to show on '<router-outlet>'

  { path: 'about', component: AboutusComponent },

  // { path: 'contact', component: ContactusComponent },
  { path: 'food', component: FoodCategoriesComponent },
  { path: 'food/:categoryId', component: FoodCategoriesComponent },
  { path: 'food/:categoryId/:idMeal', component: FoodCategoriesComponent },
  { path: 'food-gallery', component: FoodCategoriesGalleryComponent },
  { path: 'food-gallery/:categoryId', component: FoodCategoryViewComponent },
  { path: '', redirectTo: '/food-gallery', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
