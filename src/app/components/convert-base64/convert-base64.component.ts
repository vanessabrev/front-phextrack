import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-base64',
  templateUrl: './convert-base64.component.html',
  styleUrls: ['./convert-base64.component.scss']
})
export class ConvertBase64Component implements OnInit {

  file: string;
  convertedText: string;

  constructor() { }

  ngOnInit(): void { }

  onFileChange(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.setConvertedText(reader.result);
    reader.onerror = (error) => console.log('Error: ', error);
  }

  setConvertedText(ele) {
    this.convertedText = JSON.stringify(ele);
    console.log('this.convertedText', this.convertedText)
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}

