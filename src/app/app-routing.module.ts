import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  // user types as path    component to show on '<router-outlet>'
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'food', component: CategoriesComponent },
  { path: 'food/:categoryId', component: CategoriesComponent },
  { path: 'food/:categoryId/:idMeal', component: CategoriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
