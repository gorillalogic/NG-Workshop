import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input()
  users: Array<User>;

  constructor(private router: Router) { }
}
