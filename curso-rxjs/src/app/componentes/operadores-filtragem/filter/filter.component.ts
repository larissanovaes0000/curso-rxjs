import { Component, OnInit } from '@angular/core';
import { filter, from, take } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  maiores: Array<any> = [];
  menores: Array<any> = [];

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

  ngOnInit(): void { }

  filtrarMaiores() {
    const dados$ = this.arr$.pipe(
      filter(res => res.age > 18),
    )
    dados$.subscribe(res => {
      this.maiores.push(res)
    })
  }

  filtrarMenores() {
    const dados$ = this.arr$.pipe(
      filter(res => res.age < 18)
    )
    dados$.subscribe(res => {
      this.menores.push(res)
    })
  }
}
