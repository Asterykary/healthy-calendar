import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodDialogComponent } from './new-food-dialog.component';

describe('NewFoodDialogComponent', () => {
  let component: NewFoodDialogComponent;
  let fixture: ComponentFixture<NewFoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFoodDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
