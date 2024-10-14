import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoryTagCardComponent } from './food-category-tag-card.component';

describe('FoodCategoryTagCardComponent', () => {
  let component: FoodCategoryTagCardComponent;
  let fixture: ComponentFixture<FoodCategoryTagCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCategoryTagCardComponent]
    });
    fixture = TestBed.createComponent(FoodCategoryTagCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
