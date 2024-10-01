import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDemoComponent } from './routing-demo.component';

describe('RoutingDemoComponent', () => {
  let component: RoutingDemoComponent;
  let fixture: ComponentFixture<RoutingDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingDemoComponent]
    });
    fixture = TestBed.createComponent(RoutingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
