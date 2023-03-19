import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  response: any

  ngOnInit(): void {
    this.operatorInterval()
  }

  operatorInterval() {
    const num = interval(1000);
    const subscription = num.subscribe(res => this.response = res);

    setTimeout(() => {
      subscription.unsubscribe()
    }, 10000)
  }

}
