import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutProductDescription'
})
export class CutProductDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 40) + '...';
  }

}
