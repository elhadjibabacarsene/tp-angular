import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  numberSeparator(nbre: number, sep: string): string {
    let nombre: string = nbre.toString();
    const reg = /(\d+)(\d{3})/;
    while (reg.test(nombre)) {
      nombre = nombre.replace(reg, '$1' + sep + '$2');
    }
    return nombre;
  }
}
