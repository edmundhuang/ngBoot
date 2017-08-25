import { Component, OnInit , Inject} from '@angular/core';
//import { Store } from 'redux';
import * as Redux from 'redux';

import { AppStore } from '../redux/store';
import { AppState } from '../redux/state';
import * as CounterActions from '../redux/action';

@Component({
  selector: 'app-redux-counter',
  templateUrl: './redux-counter.component.html',
  styleUrls: ['./redux-counter.component.css']
})
export class ReduxCounterComponent implements OnInit {

  counter: number;
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
    //this.counter=this.getRandomInteger(1,100);
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increase(this.counter));
    // this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrease(this.counter));
    // this.store.dispatch(CounterActions.decrement());
  }

  ngOnInit() {
  }

  getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
