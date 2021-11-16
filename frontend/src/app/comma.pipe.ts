import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    value = +value // Confirm value is number
    return value.toLocaleString('en')     
  }

}
