import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenpipe',
  pure: false
})
export class EvenpipePipe implements PipeTransform {
  transform(nums: number[]) {
    return nums.filter(num => num%2==0);
  }
}
