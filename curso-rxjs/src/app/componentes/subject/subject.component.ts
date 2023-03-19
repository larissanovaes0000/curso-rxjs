import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    this.initSubject();
    this.initBehaviourSubject();
  }

  responseSubject: any
  responseBehavior: any

  initSubject(){
    const subject = new Subject<number>()

    subject.subscribe({
      next: (value: any) => this.responseSubject = value
    });

    subject.subscribe({
      next: (value: any) => this.responseSubject = value
    });

    subject.next(10)
    subject.next(20)
  }

  initBehaviourSubject(){
    const bSubject = new BehaviorSubject<number>(5)

    bSubject.subscribe({
      next: (value: any) => this.responseBehavior = value
    });

    bSubject.subscribe({
      next: (value: any) => this.responseBehavior = value
    });

    bSubject.next(50)
    bSubject.next(100)
  }
}
