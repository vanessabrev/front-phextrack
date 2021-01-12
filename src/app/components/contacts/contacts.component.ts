import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/api/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

}
