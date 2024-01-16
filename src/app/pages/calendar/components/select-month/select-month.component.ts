import { Component } from '@angular/core';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrl: './select-month.component.scss'
})
export class SelectMonthComponent {

  public iconBackClicked() {
    console.log('ICON BACK CLICKED');
  }

  public iconForwardClicked() {
    console.log('ICON FORWARD CLICKED');
  }

}
