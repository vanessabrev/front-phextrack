import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-rounded',
  templateUrl: './button-rounded.component.html',
  styleUrls: ['./button-rounded.component.scss']
})
export class ButtonRoundedComponent implements OnInit {

  @Input()
  text?: string = "Veja Mais!";

  @Input()
  buttonColor?: string;

  constructor() { }

  ngOnInit(): void { }

}
