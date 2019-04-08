import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public username = '';

  public saveUsername(usr: string) {
    this.username = usr;
  }
}
