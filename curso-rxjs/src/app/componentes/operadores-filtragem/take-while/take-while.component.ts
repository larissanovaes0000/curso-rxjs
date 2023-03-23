import { Component, OnInit } from '@angular/core';
import { interval, timer, takeUntil, takeWhile } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {

  response: any

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.operator()
  }

  operator(){

    const it$ = interval(1000)
   
    const subscription$ = it$.pipe(
      takeWhile(val => val <= 5)
    ).subscribe(res => this.response = res)

  }
}
