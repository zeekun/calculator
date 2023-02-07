import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addString } from '../store/buttons.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  //constructor(public _calculatorService:CalculatorService){}

  constructor(private store:Store){}

  onBtnPress(value:string){
    
    //this._calculatorService.data = value;
    this.store.dispatch(addString({value}));
  }
}
