import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.operator()
  }

  operator(){

  }
}
