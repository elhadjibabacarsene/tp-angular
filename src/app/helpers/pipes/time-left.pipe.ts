import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  transform(value: Date): string {
    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();
    const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    if ( y > 0 ) { return y + ' a'; }
    const d = Math.floor(diff / 1000 / 60 / 60 / 24 );
    if ( d > 0 ) { return d + ' j'; }
    const h = Math.floor(diff / (1000 / 60 / 60) % 24 );
    if ( h > 0 ) { return h + ' h'; }
    const min = Math.floor(diff / (1000 / 60) % 60);
    if ( min > 0 ) { return min + ' m'; }
    const s = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    if ( s > 0 ) { return s + ' s'; }
    return '1s';
  }

}
