import { Component,Input,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  //constructor(public _calculatorService:CalculatorService){}

  data?:Observable<String>
  constructor(private store:Store<{data:String}>){
    this.data = store.select('data');
  }
}
