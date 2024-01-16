import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-plan-expanel',
  templateUrl: './daily-plan-expanel.component.html',
  styleUrl: './daily-plan-expanel.component.scss'
})
export class DailyPlanExpanelComponent {
  panelOpenState = false;
  color:string = "warn";

  public iconAddClicked() {
    console.log("Añadir alimento");
  }

  public dailyPlanExpanelEdit() {

  }
  public dailyPlanExpanelDelete() {
    
  }
}

