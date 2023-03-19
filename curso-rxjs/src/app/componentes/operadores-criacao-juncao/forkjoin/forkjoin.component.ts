import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor(private UsersService: UsersService){}
  
  ngOnInit(): void {
    //this.operatorForkjoin()
    this.getUsers()
  }

  operatorForkjoin(){
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    const httpMult$ = forkJoin({
      first: of(1, 2, 3, 4),
      second: timer(1000),
      // error: throwError(() => new Error('Deu ruim :(')),
      promise: Promise.resolve(10)
    })

    http$.subscribe(res => console.log(res))
    httpMult$.subscribe(res => console.log(res))
  }

  getUsers(){
    this.UsersService.getUsers().subscribe(res => console.log(res))
  }
}
