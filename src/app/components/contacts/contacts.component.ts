import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/models/contacts/address.model';
import { ContactResponseModel } from 'src/app/models/contacts/contact.model';
import { ContactService } from 'src/app/services/api/contact.service';
import { ConcatenateTextService } from 'src/app/services/concatenate-text.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  listContactsInfos: Array<{ icon: string, title: string, information: string }>;
  listContactsInfosAux = [];

  constructor(
    private contactService: ContactService,
    private concatenateService: ConcatenateTextService
  ) { }

  ngOnInit(): void {
    this.setContacts();
  }

  setContacts(): void {
    this.contactService.contact$.subscribe((contacts: ContactResponseModel) => {
      this.organizeListContactsInfos(contacts);
    });
  }

  organizeListContactsInfos(contacts: ContactResponseModel): void {
    // let fakeAddress = "rua alves<&>67<&>casa cinza<&>7184544<&><&>brasilia<&>df";

    const address = this.concatenateService.disengageText(contacts.address);

    const phones = this.concatenateService.disengageText(contacts.phones);
    const emails = this.concatenateService.disengageText(contacts.emails);

    this.processAddress(address);
    this.processPhones(phones);
    this.processEmails(emails);

    this.listContactsInfos = this.listContactsInfosAux;

  }

  processAddress(arrayAddress): void {
    let organizeAddress = this.createObjectAddress(arrayAddress);

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

  processPhones(arrayPhones): void {
    let phonesProccessed = "";

    arrayPhones.forEach(phone => {
      phonesProccessed = phonesProccessed ? phonesProccessed + ', ' + phone : phone;
    });

    this.listContactsInfosAux.push({
      icon: 'phone', title: 'Telefone(s)', information: phonesProccessed
    });
  }

  processEmails(arrayEmails): void {
    let emailsProccessed = "";

    arrayEmails.forEach(email => {
      emailsProccessed = emailsProccessed ? emailsProccessed + ', ' + email : email;
    });

    this.listContactsInfosAux.push({
      icon: 'envelope', title: 'Emails', information: emailsProccessed
    });
  }

  createObjectAddress(arrayAddress: string): AddressModel {
    let objectAddress = new AddressModel();
    objectAddress.street = this.uppercaseFirstLetter(arrayAddress[0]);
    objectAddress.number = this.uppercaseFirstLetter(arrayAddress[1]);
    objectAddress.complement = this.uppercaseFirstLetter(arrayAddress[2]);
    objectAddress.postalCode = arrayAddress[3];
    objectAddress.municipality = this.uppercaseFirstLetter(arrayAddress[4]);
    objectAddress.city = this.uppercaseFirstLetter(arrayAddress[5]);
    objectAddress.uf = this.uppercaseAllLetter(arrayAddress[6]);

    return objectAddress;
  }

  uppercaseFirstLetter(text: string): string {
    return text.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }

  uppercaseAllLetter(text: string): string {
    return text.toUpperCase();
  }
}
