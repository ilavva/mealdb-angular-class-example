export type CategoriesWeGetFromAPI = {
  categories: Category[];
};

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type MealDish = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type DataOfDishMealsFromAPI = {
  meals: MealDish[];
};
