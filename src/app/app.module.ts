import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OutputComponent } from './output/output.component';
import { StoreModule } from '@ngrx/store';
import { buttonsReducer } from './store/buttons.reducer';
import { AnswerComponent } from './answer/answer.component';
import { answerReducer } from './store/answer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    OutputComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({output:buttonsReducer,answer:answerReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
