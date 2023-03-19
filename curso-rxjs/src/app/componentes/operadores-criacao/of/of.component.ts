import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  ngOnInit(): void {
    this.operatorOf()
  }

  responseArr: any;
  responseString: any
  responseMulti: any

  operatorOf() {
    const arr = of([1, 2, 3]);
    const str = of('Olá Mundo');
    const multiValores = of({ name: 'Larissa' }, true, 10, function showName() { return 'Larissa' });

    arr.subscribe(res => this.responseArr = res);
    str.subscribe(res => this.responseString = res);
    multiValores.subscribe(res => this.responseMulti = res);
  }
}
