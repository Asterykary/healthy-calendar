import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodMaintainerComponent } from './food-maintainer.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { NewFoodDialogComponent } from './components/new-food-dialog/new-food-dialog.component';



@NgModule({
  declarations: [
    FoodMaintainerComponent,
    FoodListComponent,
    NewFoodDialogComponent
  ],
  exports: [
    FoodMaintainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodMaintainerModule { }
