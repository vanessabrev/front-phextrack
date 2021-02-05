import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent{

  @Input()
  title: string = "Title";

  @Input()
  titleColor: string;

  @Input()
  titleSize: string;

  fontSizeDefault = "2rem";

  constructor() { }

}
