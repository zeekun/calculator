import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OutputComponent } from './output/output.component';
import { StoreModule } from '@ngrx/store';
import { buttonsReducer } from './store/buttons.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({data:buttonsReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
