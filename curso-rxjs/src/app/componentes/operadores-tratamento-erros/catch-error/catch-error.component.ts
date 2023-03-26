import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
   const catchError$ = this.userService.getUserCatchError()
  // catchError$.subscribe((res) => console.log('Catch Error => ', res))
  }
}
