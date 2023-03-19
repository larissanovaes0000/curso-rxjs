import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.operator()
  }

  operator(){

  }
}
