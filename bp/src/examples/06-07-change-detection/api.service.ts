import { Injectable } from '@angular/core';

import { Contact } from './contact.model';

import mock from '../../assets/mockdata/contacts.mockdata.json';

let index = 5;

const contacts: Contact[] = [ ...mock.data ];


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getContacts(max?: number) {
    index++;
    /**
     * Ignore this line, this is just run a deepcopy and avoid references
     * In a real scenario, this is not needed
     */
    return JSON.parse(JSON.stringify(contacts.slice(0, max || index)));
  }
}
