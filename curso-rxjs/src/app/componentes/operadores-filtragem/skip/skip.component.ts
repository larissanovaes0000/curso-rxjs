import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.operator()
  }

  operator(){

  }
}
