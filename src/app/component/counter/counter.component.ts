import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number;
  constructor() {
    this.counter=this.getRandomInteger(0,100);
   }

  ngOnInit() {
  }

  decrement() {
    console.log('decrement');
    this.counter -=1;
  }

  increment () {
    console.log('increment');
    this.counter +=1;
  }

  getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
