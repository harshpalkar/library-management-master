import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getF'
})
export class GetFPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').map(word=>word[0]).join('');;
  }

}
