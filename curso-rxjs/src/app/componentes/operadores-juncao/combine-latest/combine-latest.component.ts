import { Component, OnInit } from '@angular/core';
import { interval, take, of, combineLatest } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const ob1$ = interval(1000).pipe(take(4))
    const ob2$ = of(5, 6, 7, 8)
    const ob3$ = interval(1000).pipe(take(4))

    const combine$ = combineLatest([ob1$, ob2$, ob3$])

    combine$.subscribe(res=> this.response = res )
  }
}