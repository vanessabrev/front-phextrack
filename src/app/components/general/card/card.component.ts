import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title: string = 'Titulo';

  @Input()
  titleColor: string = '#000';

  @Input()
  titleSize: string;

  @Input()
  text: string = 'Lorem ipsum dolor sit am.';

  @Input()
  textColor: string = '#000';

  @Input()
  textSize: string;

  @Input()
  color: string = '#fff';

  @Input()
  buttonName: string;

  @Input()
  buttonColor?: string;

  @Input()
  icon: string;

  fontSizeDefault = "1rem";

  constructor() { }

  ngOnInit(): void {
    // this.setDefaultMock();
  }

  setDefaultMock(): void {
    this.title = "Titulo de exemplo";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.";
  }
}
