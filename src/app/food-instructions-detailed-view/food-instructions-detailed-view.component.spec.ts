import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodInstructionsDetailedViewComponent } from './food-instructions-detailed-view.component';

describe('FoodInstructionsDetailedViewComponent', () => {
  let component: FoodInstructionsDetailedViewComponent;
  let fixture: ComponentFixture<FoodInstructionsDetailedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodInstructionsDetailedViewComponent]
    });
    fixture = TestBed.createComponent(FoodInstructionsDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
