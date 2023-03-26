import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const retry$ = this.userService.getUserCatchError()
   // retry$.subscribe((res) => console.log('retry => ', res))
  }
}
