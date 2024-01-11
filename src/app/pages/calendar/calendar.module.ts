import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { SelectMonthComponent } from './components/select-month/select-month.component';
import { DailyPlanExpanelComponent } from './components/daily-plan-expanel/daily-plan-expanel.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NewFoodRegisterDialogComponent } from './components/new-food-register-dialog/new-food-register-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CalendarRoutingModule } from './calendar-routing.module';



@NgModule({
  declarations: [
    CalendarComponent,
    SelectMonthComponent,
    DailyPlanExpanelComponent,
    DatepickerComponent,
    NewFoodRegisterDialogComponent,
  ],
  exports: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ],
})
export class CalendarModule { }
