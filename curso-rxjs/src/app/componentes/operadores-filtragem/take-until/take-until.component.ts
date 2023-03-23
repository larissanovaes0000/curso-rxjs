import { Component, OnInit } from '@angular/core';
import { interval, takeUntil, timer } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operator()
  }

  operator() {
    const it$ = interval(1000)
    const timer$ = timer(5000)

    const subscription$ = it$.pipe(
      takeUntil(timer$)
    ).subscribe(res => this.response = res)

  }
}
