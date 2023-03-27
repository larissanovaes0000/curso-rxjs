import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss']
})
export class FindIndexComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const values$ = of('Larissa', 'Letícia', 'Maurício');

    const findName$ = values$.pipe(
      findIndex(name => name === 'Maurício')
    )

    findName$.subscribe(res => this.response = res)
  }
}