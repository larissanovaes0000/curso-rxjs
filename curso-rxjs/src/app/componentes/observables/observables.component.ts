import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  responseInterval: any
  responseNext: any

  ngOnInit(): void {
    this.initObservable()
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next('funfou'),
      subscriber.next('Hello Downtown'),
      subscriber.complete()
    })

    const observer = {
      next: (res: any) => console.log('next', res),
      error: (error: any) => console.log('error', error),
      complete: () => console.log('complete')
    }

    const intervalo = interval(1000);

    const subscription = observable.subscribe(res => this.responseNext = res);
    const subscription2 = intervalo.subscribe(res => this.responseInterval = res);

    setTimeout(() => {
      subscription2.unsubscribe()
    }, 5000);

    // OUTRA FORMA DE FAZER:
    // observable.subscribe({
    //   next: (res) => console.log(res),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('completou!')
    // })


  }
}
