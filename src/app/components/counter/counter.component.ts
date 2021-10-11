import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from 'src/app/store/counter1/counter.action';
import { decrementAction2, incrementAction2, resetAction2 } from 'src/app/store/counter2/counter2.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter = 0;
  counter1 = 0;
  constructor(private store: Store<{ count: number; count2: number }>) {
    this.store.select('count').subscribe((count) => {
      this.counter = count;
    });
    this.store.select('count2').subscribe((count) => {
      this.counter1 = count;
    });
  }
  @Input() name?: string;

  ngOnInit(): void {}
  /**
   * Dsipatching Actions of counter 2 state
   */
  increment() {
    this.store.dispatch(incrementAction({ counter: this.counter }));
  }
  decrement() {
    this.store.dispatch(decrementAction());
  }
  reset() {
    this.store.dispatch(resetAction());
  }

  /**
   * Dsipatching Actions of counter 2 state
   */
  increment2() {
    this.store.dispatch(incrementAction2());
  }
  decrement2() {
    this.store.dispatch(decrementAction2());
  }
  reset2() {
    this.store.dispatch(resetAction2());
  }
}
