import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { calculateFactorial } from '../factorial.pipe';

@Component({
  selector: 'bp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public list: Contact[];

  @Output()
  public add = new EventEmitter();

  public txtinput: string;

  constructor() { }

  public addNewContact(event, name: string) {
    if (event.keyCode === 13) {
      this.add.emit(name);
      this.txtinput = '';
    }
  }

  public calcFac(num: number) {
    console.log('Func: Calculating factorial');
    return calculateFactorial(num);
  }

}
