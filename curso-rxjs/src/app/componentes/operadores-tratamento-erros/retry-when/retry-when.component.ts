import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
   
  }
}
