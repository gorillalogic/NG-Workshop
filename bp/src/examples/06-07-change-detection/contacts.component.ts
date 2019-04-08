import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ApiService } from './api.service';

@Component({
  selector: 'bp-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  public contacts: Contact[];

  constructor(public contactService: ApiService) { }

  public ngOnInit() {
    this.contacts = this.contactService.getContacts(500);
  }

  public addNewContact(name: string) {
    this.contacts = [{ id: 101, name, randomNumber: Math.floor(Math.random() * Math.floor(10)) }, ...this.contacts];
  }

}

























// public print() {
//   console.log('Hi!');
// }
