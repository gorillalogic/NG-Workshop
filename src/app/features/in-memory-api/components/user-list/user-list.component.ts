import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input()
  users: Array<User>;
  @Output()
  deleteUser = new EventEmitter();

  constructor() {}
}
