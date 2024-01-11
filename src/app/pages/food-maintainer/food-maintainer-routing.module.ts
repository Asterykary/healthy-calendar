import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMaintainerComponent } from './food-maintainer.component';

const routes: Routes = [
  {path: '', component: FoodMaintainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodMaintainerRoutingModule { }
