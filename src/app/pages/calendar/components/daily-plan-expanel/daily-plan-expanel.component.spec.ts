import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlanExpanelComponent } from './daily-plan-expanel.component';

describe('DailyPlanExpanelComponent', () => {
  let component: DailyPlanExpanelComponent;
  let fixture: ComponentFixture<DailyPlanExpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyPlanExpanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyPlanExpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
