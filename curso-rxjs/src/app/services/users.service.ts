import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share, concat, forkJoin, interval, map, merge, Observable, shareReplay, toArray, zip, catchError, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:3000/users'),
      apiExterna: this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    })
    return http$
  }

  getUsersZip(): Observable<any> {
    const apiLocal$ = this.http.get('http://localhost:3000/users')
    const apiExterna$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    const result$ = zip(apiLocal$, apiExterna$)
    return result$
  }

  getUsersMerge(): Observable<any> {
    const interval$ = interval(1000)
    const apiLocal$ = this.http.get('http://localhost:3000/users')
    const apiExterna$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    const result$ = merge(interval$, apiLocal$, apiExterna$)
    return result$
  }

  getUsersConcat(): Observable<any> {
    const interval$ = interval(1000)
    const apiLocal$ = this.http.get('http://localhost:3000/users')
    const apiExterna$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    const result$ = concat(interval$, apiLocal$, apiExterna$)
    return result$
  }

  getUsersHttp(): Observable<any> {
    const request$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        map((data: any) => data.title)
      )
    return request$
  }

  getUserSwitchMap() {
    return this.http.get('http://localhost:3000/user')
  }

  getUserSwitchMapSearch(cpf: string) {
    return this.http.get(`http://localhost:3000/users?cpf=${cpf}`)
  }

  getUserToArray() {
    return this.http.get('http://localhost:3000/user')
      .pipe(
        toArray()
      )
  }

  getUserDebounceTime(name: string) {
    return this.http.get(`http://localhost:3000/users?name=${name}`)
      .pipe(
        toArray()
      )
  }

  getUserShareReplay() {
    //requisição é feita só uma vez independente da quantidade de observables
    return this.http.get('http://localhost:3000/users')
      .pipe(
        shareReplay(1)
      )
  }

  getUserShare() {
    //requisição é feita só uma vez independente da quantidade de observables
    return this.http.get('http://localhost:3000/users')
      .pipe(
        share()
      )
  }

  getUserCatchError() {
    return this.http.get('http://localhost:3000/us')
      .pipe(
        catchError(error => {
          of('ocorreu um erro', error)
          return throwError(() => error)
        }),
        retry(5)
      )
  }
}
