import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {

  resMapTo: any
  resInterval: any

  constructor() { }

  ngOnInit(): void {
    this.mapToOperator()
  }

  mapToOperator() {
    const clickEvent$ = fromEvent(document, 'click')
    const interval$ = interval(1000)

    const mapTo$ = clickEvent$.pipe(mapTo('hello downtown!'))
    const mapInterval$ = interval$.pipe(mapTo('passou 1 segundo'))

    mapTo$.subscribe(res => this.resMapTo = res)
    mapInterval$.subscribe(res => this.resInterval = res)
  }

}
