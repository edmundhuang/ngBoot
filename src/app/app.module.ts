import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CounterComponent } from './component/counter/counter.component';
import { ReduxCounterComponent } from './component/redux-counter/redux-counter.component';

import { appStoreProviders } from './component/redux/store';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CounterComponent,
    ReduxCounterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
