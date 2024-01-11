import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodRegisterDialogComponent } from './new-food-register-dialog.component';

describe('NewFoodRegisterDialogComponent', () => {
  let component: NewFoodRegisterDialogComponent;
  let fixture: ComponentFixture<NewFoodRegisterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFoodRegisterDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFoodRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
