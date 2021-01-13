import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcatenateTextService {

  RULE_SPLIT_TEXT = '<&>';


  constructor() { }

  // TODO: verificar essa tipagem
  concatenateText(values: any): string {
    let concatenatedText = "";
    let arrayValues = Object.entries(values)

    arrayValues.forEach(value => {
      console.log('value', value)
    });

    return concatenatedText;
  }

  disengageText(text: string): any {
    return text.split(this.RULE_SPLIT_TEXT);
  }
}
