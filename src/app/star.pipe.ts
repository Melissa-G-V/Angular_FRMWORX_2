import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (!value) return '';
    return '*'.repeat(value.length);
  }

}
