import { Component, OnInit } from '@angular/core';
import { SendEmail } from 'src/app/models/send-email.model';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  emailForm = new SendEmail();

  constructor() { }

  ngOnInit(): void { }

  setValueName(value: string): void {
    console.log('value', value)
    this.emailForm.name = value;
  }

  setValueEmail(value: string): void {
    this.emailForm.email = value;
  }

  setValueMessage(value: string): void {
    this.emailForm.message = value;
  }

  sendEmail(): void {
    console.log('this.emailForm', this.emailForm)
  }
}
