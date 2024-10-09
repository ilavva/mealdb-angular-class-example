import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoriesGalleryComponent } from './food-categories-gallery.component';

describe('FoodCategoriesGalleryComponent', () => {
  let component: FoodCategoriesGalleryComponent;
  let fixture: ComponentFixture<FoodCategoriesGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCategoriesGalleryComponent]
    });
    fixture = TestBed.createComponent(FoodCategoriesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
