import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  responseArr: any
  responseString: any
  responsePromise: any

  ngOnInit(): void {
    this.operatorFrom()
  }

  operatorFrom() {
    const arr = from([1, 2, 3, 4, 5]);
    const str = from('olha só');
    const promisse = from(new Promise(resolve => resolve('hey joe')));

    arr.subscribe(res => this.responseArr = res)
    str.subscribe(res => this.responseString = res);
    promisse.subscribe(res => this.responsePromise = res)
  }

}
