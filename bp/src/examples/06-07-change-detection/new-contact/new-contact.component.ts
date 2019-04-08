import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bp-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {

  @Output()
  public add = new EventEmitter();

  public contact: string;

  constructor() { }

  public addNewContact(event, name: string) {
    if (event.keyCode === 13) {
      this.add.emit(name);
      this.contact = '';
    }
  }

}
