import { Pipe, PipeTransform } from '@angular/core';
import { EvenpipePipe } from './evenpipe.pipe';

@Pipe({
  name: 'evenimpurepipe',
  pure: false
})
export class EvenimpurepipePipe extends EvenpipePipe{

  transform(nums: number[]) {
    return nums.filter(num => num%2!=0);
  }
}
