export type CategoriesWeGetFromAPI = {
  categories: Category[];
};

export type DataOfDishMealsFromAPI = {
  meals: MealDish[];
};

export type DataMealInstructionsFromAPI = {
  meals: MealInstruction[];
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

export type MealInstruction = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
};
