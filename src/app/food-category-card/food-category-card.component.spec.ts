import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoryCardComponent } from './food-category-card.component';

describe('FoodCategoryCardComponent', () => {
  let component: FoodCategoryCardComponent;
  let fixture: ComponentFixture<FoodCategoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCategoryCardComponent],
    });
    fixture = TestBed.createComponent(FoodCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
