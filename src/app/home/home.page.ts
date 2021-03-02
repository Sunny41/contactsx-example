import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import ContactsX from 'cordova-plugin-contacts-x'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  chooseContact() {
    ContactsX.requestPermission(function (success) {
      ContactsX.pick(function (contact) {
        console.log(success);
        console.log(contact);
        console.log(contact.firstName);
        const contactInfo = contact;
        console.log(contactInfo);
        this.name = contactInfo.firstName;
        this.name = contact.firstName + ' ' + contact.familyName;
      }, function (error) {
        console.log(error);
      });
    }, function (error) {
      console.log(error);
    });
  }

}
