import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss']
})
export class SwitchAllComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const click = fromEvent(document, 'click').
      pipe(
        tap(() => console.log('cliquei'))
      )

    const source = click.pipe(
      map(() => interval(1000))
    )

    source.pipe(
      switchAll()
    ).subscribe(res => this.response = res)
  }

}