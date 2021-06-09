import { Pipe, PipeTransform } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Pipe({
  name: 'joinProductColors'
})
export class JoinProductColorsPipe implements PipeTransform {

  transform(value: Color[]): any {
    const colors: string[] = [];
    value.forEach(color => {
      colors.push(color.name);
    });
    return colors.join('-');
  }

}
