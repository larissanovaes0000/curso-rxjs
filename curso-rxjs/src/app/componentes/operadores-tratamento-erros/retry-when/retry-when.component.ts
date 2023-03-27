import { Component, OnInit } from '@angular/core';
import { delayWhen, interval, map, retryWhen, tap, timer } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const it$ = interval(1000)
    const subscription$ = it$.pipe(
      map((val: any) => {
        if (val > 5) {
          throw val
        }

        return val
      }),

      retryWhen( error => (
        error.pipe(
        //  tap(val => console.log(`Value ${val}`)),
          delayWhen(val => timer(val * 1000))
        )
      ))
    )


    subscription$.subscribe(res => this.response = res)


  }
}
