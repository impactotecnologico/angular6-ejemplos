import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador'
})

export class MultiplicadorPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

  }
}
