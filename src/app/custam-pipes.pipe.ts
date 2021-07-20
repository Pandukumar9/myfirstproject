import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custamPipes'
})
export class CustamPipesPipe implements PipeTransform {

  transform(value: string,array: any[]): any {
    // return "skilliceberg";
    return array[0] + "-" +array[1] + "-" + array[2];
  }
  // transform(value: number, multiply: string): number { 
  //   let maniraj = parseFloat(multiply); 
  //   return maniraj * value;
  // } codeevoluton
}
