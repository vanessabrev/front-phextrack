import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-areatext',
  templateUrl: './areatext.component.html',
  styleUrls: ['./areatext.component.scss']
})
export class AreatextComponent implements OnInit {

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
