import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraytostring'
})
export class ArraytostringPipe implements PipeTransform {

   transform(value, sep = ","): string {

    return value.toString();
  }

}
