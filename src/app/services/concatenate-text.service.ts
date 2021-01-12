import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcatenateTextService {

  constructor() { }

  // TODO: verificar essa tipagem
  disengageText(values: any): string {
    let concatenatedText = "";
    let arrayValues = Object.entries(values)

    arrayValues.forEach(value => {
      console.log('value', value)
    });

    return concatenatedText;
  }

  concatenateText(): void { };
}
