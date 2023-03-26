import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, withLatestFrom } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const clicks$ = fromEvent(document, 'click')
    const timer$ = interval(1000)
    const result$ = clicks$.pipe(
      withLatestFrom(timer$)
    )

    result$.subscribe(res => this.response = res)

  }

}