import { Component, OnInit } from '@angular/core';
import { from, map, take } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  response: Array<any> = []

  arr$ = from([
    { name: 'Fulano', age: 10 },
    { name: 'Menino', age: 20 },
    { name: 'Creusa', age: 15 },
    { name: 'Mario', age: 60 },
    { name: 'João', age: 36 },
    { name: 'Joaquim', age: 89 },
    { name: 'Emílio', age: 55 },
  ]);


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operator()
  }

  operator() {
    const filtro = this.arr$.pipe(
      map(data => data.name),
      take(3)
    )

    filtro.subscribe(res=> this.response.push(res))
  }
}
