import { Component, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  answer?:Observable<string>;
  constructor(private store:Store<{answer:string}>){
    this.answer = store.select('answer');

    
  }
}
