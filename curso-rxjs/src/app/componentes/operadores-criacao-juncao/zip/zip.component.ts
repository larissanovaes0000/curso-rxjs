import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent {
  resZip: any

  constructor(private UsersService: UsersService){}
  
  ngOnInit(): void {
    this.getUsersZip()
  }

  getUsersZip(){
    this.UsersService.getUsersZip().subscribe(res=> this.resZip = res)
  }

}
