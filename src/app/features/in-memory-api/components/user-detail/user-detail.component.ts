import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
