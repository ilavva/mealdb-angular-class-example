import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoryViewComponent } from './food-category-view.component';

describe('FoodCategoryViewComponent', () => {
  let component: FoodCategoryViewComponent;
  let fixture: ComponentFixture<FoodCategoryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCategoryViewComponent]
    });
    fixture = TestBed.createComponent(FoodCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
