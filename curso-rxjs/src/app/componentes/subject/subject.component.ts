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

  initSubject(){
    const subject = new Subject<number>()

    subject.subscribe({
      next: (value: any) => console.log(value)
    });

    subject.subscribe({
      next: (value: any) => console.log(value)
    });

    subject.next(10)
    subject.next(20)
  }

  initBehaviourSubject(){
    const bSubject = new BehaviorSubject<number>(5)

    bSubject.subscribe({
      next: (value: any) => console.log(value)
    });

    bSubject.subscribe({
      next: (value: any) => console.log(value)
    });

    bSubject.next(50)
    bSubject.next(100)
  }
}
