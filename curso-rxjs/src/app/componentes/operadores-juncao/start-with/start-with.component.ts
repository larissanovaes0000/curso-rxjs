import { Component, OnInit } from '@angular/core';
import { startWith, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const values = of(1, 2, 3)
    const numbers = values.pipe(startWith(0))
    numbers.subscribe(res => this.response = res)
  }
}