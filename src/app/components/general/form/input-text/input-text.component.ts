import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input()
  placeholder: string = 'Preencha esse campo.';

  @Output()
  valueText = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  addValueText(value: string) {
    this.valueText.emit(value);
  }

}
