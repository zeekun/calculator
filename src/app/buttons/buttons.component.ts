import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  constructor(public _calculatorService:CalculatorService){}

  onBtnPress(value:String){
    this._calculatorService.data = value;
  }
}
