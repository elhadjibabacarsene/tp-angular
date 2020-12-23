import { Pipe, PipeTransform } from '@angular/core';
import {UtilitiesService} from '../utilities.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {
  constructor(private utilitiesService: UtilitiesService) {
  }
  transform(value: number, sep: string): string {
    return this.utilitiesService.numberSeparator(value, sep);
  }

}
