import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')),
      ),
    );
  }
}
