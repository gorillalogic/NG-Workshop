import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, exhaustMap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  deleteUser(id: string) {
    return this.http
      .delete(`api/users/${id}`)
      .pipe(
        exhaustMap(() => of(null))
      );
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get(`api/users/${id}`)
      .pipe(
        map(user => user as User),
      );
  }

  getUsers(): Observable<Array<User>> {
    return this.http
      .get('api/users')
      .pipe(
        map(users => users as Array<User>),
      );
  }

  search(query: string): Observable<Array<User>> {
    return this.http
        .get(`api/users/?name=${query}`)
        .pipe(
          map(response => response as Array<User>),
        );
  }
}
