// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'star'
// })
// export class StarPipe implements PipeTransform {

//   transform(value: string, ...args: any[]): string {
//     if (!value) return '';
//     return '*'.repeat(value.length);
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: number): string {
    console.log('Value:', value);

    if (!value || typeof value !== 'number') {
      return ''; 
    }

    return '*'.repeat(value);
  }
}


