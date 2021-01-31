import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/models/contacts/address.model';
import { ContactModel, ContactViewModel } from 'src/app/models/contacts/contact.model';
import { EmailModel } from 'src/app/models/contacts/email.model';
import { PhoneModel } from 'src/app/models/contacts/phone.model';
import { ContactService } from 'src/app/services/api/contact.service';
import { ConcatenateTextService } from 'src/app/services/concatenate-text.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  listContactsInfos: Array<ContactViewModel>;
  listContactsInfosAux = [];

  constructor(
    private contactService: ContactService,
    private concatenateService: ConcatenateTextService
  ) { }

  ngOnInit(): void {
    this.setContacts();
  }

  setContacts(): void {
    this.contactService.contact$.subscribe((contacts: ContactModel) => {
      this.organizeListContactsInfos(contacts);
    });
  }

  organizeListContactsInfos(contacts: ContactModel): void {
    Object.entries(contacts).forEach(contact => {
      if (contact[0] === 'phones') {
        this.processPhones(contact[1]);
      } else if (contact[0] === 'emails') {
        this.processEmails(contact[1]);
      } else if (contact[0] === 'adresses') {
        this.processAddress(contact[1][0]);
      }
    });

    this.listContactsInfos = this.listContactsInfosAux;
  }

  processAddress(arrayAddress: AddressModel): void {

    let organizeAddress = this.uppercaseAllWordAddress(arrayAddress);

    // Result: "street, number, complement, municipality, city - uf, cep"
    let addressProccessed =
      organizeAddress.street + ', ' +
      organizeAddress.number + ', ' +
      organizeAddress.complement + ', ' +
      organizeAddress.municipality + ', ' +
      organizeAddress.city + ' - ' +
      organizeAddress.uf + ', ' +
      organizeAddress.postalCode;


    this.listContactsInfosAux.push({
      icon: 'map-marker', title: 'Endereço', information: addressProccessed
    });
  }

  processPhones(arrayPhones: Array<PhoneModel>): void {
    let phonesProccessed = "";

    arrayPhones.forEach((item: PhoneModel) => {
      phonesProccessed = phonesProccessed ? phonesProccessed + ', ' + item.phone : item.phone;
    });

    this.listContactsInfosAux.push({
      icon: 'phone', title: 'Telefone(s)', information: phonesProccessed
    });
  }

  processEmails(arrayEmails: Array<EmailModel>): void {
    let emailsProccessed = "";

    arrayEmails.forEach((item: EmailModel) => {
      emailsProccessed = emailsProccessed ? emailsProccessed + ', ' + item.email : item.email;
    });

    this.listContactsInfosAux.push({
      icon: 'envelope', title: 'Email(s)', information: emailsProccessed
    });
  }

  uppercaseAllWordAddress(address: AddressModel): AddressModel {
    address.street = this.uppercaseFirstLetter(address.street);
    address.number = this.uppercaseFirstLetter(address.number);
    address.complement = this.uppercaseFirstLetter(address.complement);
    address.municipality = this.uppercaseFirstLetter(address.municipality);
    address.city = this.uppercaseFirstLetter(address.city);
    address.uf = this.uppercaseAllLetter(address.uf);
    return address;
  }

  uppercaseFirstLetter(text: string): string {
    return text.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }

  uppercaseAllLetter(text: string): string {
    return text.toUpperCase();
  }
}
