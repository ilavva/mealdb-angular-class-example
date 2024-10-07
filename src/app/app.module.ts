import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { HomeComponent } from './home/home.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';

import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodDishesDetailedViewComponent } from './food-dishes-detailed-view/food-dishes-detailed-view.component';
import { FoodInstructionsDetailedViewComponent } from './food-instructions-detailed-view/food-instructions-detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,

    HomeComponent,

    RoutingDemoComponent,

    FoodCategoriesComponent,
    FoodDishesDetailedViewComponent,
    FoodInstructionsDetailedViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
