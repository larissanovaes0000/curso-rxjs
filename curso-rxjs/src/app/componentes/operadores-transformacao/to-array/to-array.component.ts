import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.toArrayOperator()
  }

  toArrayOperator() {
    const obj$ = of({ name: "larissa", age: 30 })
    const arr$ = obj$.pipe(toArray())

    this.userService.getUserToArray().subscribe(console.log)
    arr$.subscribe(res => this.response = res)
  }

}
