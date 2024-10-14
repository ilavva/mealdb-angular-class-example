import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsGalleryComponent } from './meals-gallery.component';

describe('MealsGalleryComponent', () => {
  let component: MealsGalleryComponent;
  let fixture: ComponentFixture<MealsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsGalleryComponent]
    });
    fixture = TestBed.createComponent(MealsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
