import { Component, OnInit } from '@angular/core';
import { isEmpty, Subject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss']
})
export class IsEmptyComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
   const subject$ = new Subject<string>()
   const result$ = subject$.pipe(isEmpty())
   subject$.subscribe(res => this.response = res)
   result$.subscribe(console.log)
   subject$.next('Larissa')
  }
}
