import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-contacts',
  templateUrl: './info-contacts.component.html',
  styleUrls: ['./info-contacts.component.scss']
})
export class InfoContactsComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  title: string;

  @Input()
  information: string;

  constructor() { }

  ngOnInit(): void {
  }

}
