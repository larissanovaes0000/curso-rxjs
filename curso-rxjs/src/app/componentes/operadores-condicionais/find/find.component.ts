import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const values$ = of('Larissa', 'Letícia', 'Maurício');

    const findName$ = values$.pipe(
      find(name => name === 'Larissa')
    )

    findName$.subscribe(res => this.response = res)
  }
}