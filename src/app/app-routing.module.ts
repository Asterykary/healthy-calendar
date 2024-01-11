import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'calendar', pathMatch: 'full'
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'food-maintainer',
    loadChildren: () => import('./pages/food-maintainer/food-maintainer.module').then(m => m.FoodMaintainerModule)
  }

  // {
  //   path: '',
  //   component: CalendarComponent,
  //   children: [
  //     { path: 'dailyPlanExpanel', component: DailyPlanExpanelComponent},
  //     { path: 'datePicker', component: DatepickerComponent},
  //     {path: 'newFoodRegisterDialog', component: NewFoodDialogComponent},
  //     { path: 'selectMonth', component: SelectMonthComponent},
  //     { path: '', redirectTo: '/dailyPlanExpanel', pathMatch: 'full'}
  //   ]
  // },
  // {
  //   path: '',
  //   component: FoodMaintainerComponent,
  //   children: [
  //     { path: 'foodList', component: FoodListComponent},
  //     { path: 'newFoodDialog', component: DatepickerComponent},
  //     { path: '', redirectTo: '/foodList', pathMatch: 'full'}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
