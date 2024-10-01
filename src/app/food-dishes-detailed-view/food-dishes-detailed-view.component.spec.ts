import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDishesDetailedViewComponent } from './food-dishes-detailed-view.component';

describe('FoodDishesDetailedViewComponent', () => {
  let component: FoodDishesDetailedViewComponent;
  let fixture: ComponentFixture<FoodDishesDetailedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDishesDetailedViewComponent]
    });
    fixture = TestBed.createComponent(FoodDishesDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
