import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, skip, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements AfterViewInit {

  @ViewChild('button') button!: ElementRef

  response: any

  constructor(private userService: UsersService) { }

  ngAfterViewInit(): void {
    this.operator()
  }

  operator() {
    fromEvent(this.button.nativeElement, 'click').pipe(
      skip(3),
      tap(() => this.response = 'cliquei no botão')
    ).subscribe()

  }
}
