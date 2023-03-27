import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const values$ = of(1, 2, 3, 4, 5);

    const equals = values$.pipe(
      every(x => x < 5)
    )

    equals.subscribe(res => this.response = res)
  }
}