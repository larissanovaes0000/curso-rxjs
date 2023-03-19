import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit(): void {
    this.operatorThrowError();
  }

  operatorThrowError() {
    const err = throwError(() => 'mensagem de erro');

    err.subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log('ish deu ruim man', error),
      complete: () => console.log('completou')
    })

  }
}
