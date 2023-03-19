import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit {

  response: any

  @ViewChild('botao') botao!: ElementRef

  ngAfterViewInit(): void {
    this.operatorFromEvent()
  }

  operatorFromEvent() {
    const el = fromEvent(this.botao.nativeElement, 'click');
    el.subscribe(res => this.response = res);
  }
}
