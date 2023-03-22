import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('button') button!: ElementRef

  resInterval: any
  resSwitchMap: any

  constructor(private userService: UsersService) { }

  ngAfterViewInit(): void {
    this.switchMapOperator()
    this.intervalOperator()
  }

  intervalOperator(){
    fromEvent(document, 'click')
    .pipe(
      switchMap(() => interval(1000))
    ).subscribe(res => this.resInterval = res)
  }

  switchMapOperator() {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        switchMap(() => this.userService.getUserSwitchMap())
      )
      .pipe(
        map((res: any) => res.cpf),
        switchMap(cpf => this.userService.getUserSwitchMapSearch(cpf))
      ).subscribe(res => this.resSwitchMap = res)

  }

}
