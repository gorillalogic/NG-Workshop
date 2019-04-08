import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts.component';
import { ListComponent } from './list/list.component';
import { FactorialPipe } from './factorial.pipe';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
  declarations: [ContactsComponent, ListComponent, FactorialPipe, NewContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
