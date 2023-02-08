import { Component,Input,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAnswer } from '../store/buttons.actions';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  //constructor(public _calculatorService:CalculatorService){}

  output?:Observable<string>
  constructor(private store:Store<{output:string}>){
    this.output = store.select('output');

    const outputStream = this.output.pipe();
    outputStream.subscribe((val) => {
        store.dispatch(getAnswer({input:val}))
      }
    );
  }
}
