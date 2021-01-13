import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactResponse } from 'src/app/models/contacts/contact.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly api = environment.apiUrl;

  private contactsSubject = new Subject<ContactResponse>();
  contact$ = this.contactsSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.getContacts();
  }

  getContacts(): void {
    this.httpClient.get<ContactResponse>(`${this.api}/contacts`)
      .toPromise().then((contacts: ContactResponse) => {
        this.contactsSubject.next(contacts[0]);
      });
  }
}
