import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactResponseModel } from 'src/app/models/contacts/contact.model';
import { environment } from 'src/environments/environment';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly api = environment.apiUrl;

  private contactsSubject = new Subject<ContactResponseModel>();
  contact$ = this.contactsSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorLog: ErroLogService
  ) {
    this.getContacts();
  }

  getContacts(): void {
    this.httpClient.get<ContactResponseModel>(`${this.api}/contacts`)
      .toPromise().then((contacts: ContactResponseModel) => {
        this.contactsSubject.next(contacts[0]);
      }, err => this.errorLog.showError(err, 'ContactService'));
  }
}
