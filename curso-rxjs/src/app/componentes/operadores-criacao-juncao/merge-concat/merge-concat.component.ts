import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss']
})
export class MergeConcatComponent implements OnInit {
  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUsersConcat().subscribe(res => console.log('concat', res)) //concat é síncrono
    this.UsersService.getUsersMerge().subscribe(res => console.log('Merge', res)) // merge é assíncrono
  }

}
