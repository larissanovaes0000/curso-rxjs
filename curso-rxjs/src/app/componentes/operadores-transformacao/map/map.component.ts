import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.mapOperator()
  }

  mapOperator() {
    const arr$ = from([
      { name: 'Fulano', age: 30 },
      { name: 'Maria', age: 80 },
      { name: 'Herculano', age: 74 },
    ]);

    const num$ = from([1, 2, 3, 4, 5])

    const mapArr$ = arr$.pipe(
      map(({ name }) => name)
    )

    const numMap$ = num$.pipe(
      map(num => num * 2)
    )

    mapArr$.subscribe(console.log)
    numMap$.subscribe(console.log)

    this.userService.getUsersHttp().subscribe(console.log)
  }
}
