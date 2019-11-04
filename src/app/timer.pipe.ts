import { Pipe, PipeTransform } from '@angular/core';
import { Observable, timer, interval } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Timer } from './universalvariables.service';
//Hola
@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: Timer): any {
    return interval(500)
      .pipe(
        map(res => {
          if (value.c) {
            return value.c*1000
          } else {
            if (value.i) {
              if (value.f) {
                return value.f - value.i
              } else {
                return Date.now() - value.i
              }
            } else {
              return 0
            }
          }

        })
      )
      ;
  }

}
