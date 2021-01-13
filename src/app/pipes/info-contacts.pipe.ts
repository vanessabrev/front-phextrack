import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infoContacts'
})
export class InfoContactsPipe implements PipeTransform {

  transform(value: string, typeInfo: string, information: string): string {

    // if (typeInfo.toLowerCase().match(/endereço/) || typeInfo.toLowerCase().match(/addres/)) {
    //   value = value
    // }

    // if (typeInfo.toLowerCase().match(/mail/)) {
    //   value = value
    // }

    if (typeInfo.toLowerCase().match(/phone/) || typeInfo.toLowerCase().match(/tel/)) {
      let processNumber = "";

      information.split(', ').forEach(phoneNumber => {
        processNumber = processNumber
          ? processNumber + ' - ' + this.formatPhone(phoneNumber)
          : this.formatPhone(phoneNumber);
      });

      value = processNumber;
    }

    return value;
  }

  formatPhone(phoneNumber): string {
    let phone = phoneNumber.toString().replace(/\D/g, '');

    let foneFormatado = '';

    if (phone.length > 12) {
      foneFormatado = phone.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

    } else if (phone.length > 11) {
      foneFormatado = phone.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

    } else if (phone.length > 10) {
      foneFormatado = phone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

    } else if (phone.length > 9) {
      foneFormatado = phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

    } else if (phone.length > 5) {
      foneFormatado = phone.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

    } else if (phone.length > 1) {
      foneFormatado = phone.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
    } else {
      if (phone !== '') { foneFormatado = phone.replace(/^(\d*)/, '($1'); }
    }
    return foneFormatado;
  }

}
