import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  response: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.operador()
  }

  operador() {
    const obsUser$ =   this.userService.getUserShareReplay()
    const obsUserLarissa$ =  obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Larissa')))
    const obsUserJoao$ =  obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'João')))

    obsUser$.subscribe(res => this.response = res)
    //obsUserLarissa$.subscribe(console.log)
   // obsUserJoao$.subscribe(console.log)
  }
}