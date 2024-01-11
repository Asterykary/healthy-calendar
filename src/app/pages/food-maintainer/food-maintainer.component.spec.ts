import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMaintainerComponent } from './food-maintainer.component';

describe('FoodMaintainerComponent', () => {
  let component: FoodMaintainerComponent;
  let fixture: ComponentFixture<FoodMaintainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodMaintainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
