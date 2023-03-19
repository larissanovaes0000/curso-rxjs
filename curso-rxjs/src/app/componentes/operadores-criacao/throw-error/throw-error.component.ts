import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {
  responseNext: any
  responseError: any
  responseComplete: any

  ngOnInit(): void {
    this.operatorThrowError();
  }

  operatorThrowError() {
    const err = throwError(() => 'ish deu ruim man');

    err.subscribe({
      next: (res) => this.responseNext = res,
      error: error => this.responseError = error,
      complete: () => this.responseComplete = 'completou'
    })

  }
}
