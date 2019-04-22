import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit, OnDestroy {
  users$: Observable<Array<User>>;
  searchResults$: Observable<Array<User>>;

  search: FormControl = new FormControl('');
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = new Subscription();
  }

  getUsers() {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit() {
    this.getUsers();
    this.listenForFieldChange();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleFieldChange(query) {
    this.searchResults$ = this.userService.search(query);
  }

  listenForFieldChange() {
    this.subscription.add(
      this.search.valueChanges
        .pipe(
          debounceTime(1000),
        )
        .subscribe(val => this.handleFieldChange(val))
    );
  }

}
