import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef

  response: any

  constructor(private userService: UsersService) { }

  ngAfterViewInit(): void {
    this.operator()
    
  }

  operator() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map((event: any) => event.target.value),
      switchMap((value: any) => this.userService.getUserDebounceTime(value))
    ).subscribe(res => this.response = res)
    
  }
}
