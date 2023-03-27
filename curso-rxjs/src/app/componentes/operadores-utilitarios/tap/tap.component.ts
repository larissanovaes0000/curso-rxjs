import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
   this.operador()
  }

  operador() {
    const arr$ = of([
      { id: 1, name: 'Larissa' },
      { id: 2, name: 'Melissa' },
      { id: 3, name: 'Clarisse' },
    ])

    const subscription$ = arr$.pipe(
     // tap((val: any) => console.log('antes do map', val)),
      map((val: any) => val.filter((val: any) => val.name === 'Larissa')),
      tap((val: any) => {
        this.response = val;
      //  console.log('depois do map', val)
      }),
    )

    subscription$.subscribe()
  }
}