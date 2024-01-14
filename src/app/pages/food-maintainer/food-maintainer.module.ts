import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodMaintainerComponent } from './food-maintainer.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { NewFoodDialogComponent } from './components/new-food-dialog/new-food-dialog.component';
import { FoodMaintainerRoutingModule } from './food-maintainer-routing.module';
import { SharedModule } from '../../shared/shared.module';



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
    CommonModule,
    FoodMaintainerRoutingModule,
    SharedModule
  ]
})
export class FoodMaintainerModule { }
