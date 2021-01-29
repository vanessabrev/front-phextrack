import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroLogService {

  constructor() { }

  showError(err: Error, msg?: string): void {
    console.log("%c <-||FRONT ERRO||->", 'background: orange; color: white; display: block;', "\n \n" + err.message);
    console.log('||msg||', msg)
  }

  showNotification( msg?: string): void {
    console.log('||msg||', msg)
  }
}
