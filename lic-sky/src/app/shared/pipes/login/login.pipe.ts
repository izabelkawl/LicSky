import { Pipe, PipeTransform } from '@angular/core';
import { IButton } from 'src/app/commons/button/button.models';

@Pipe({
  name: 'loginPipe',
})
export class LoginPipe implements PipeTransform {
  transform(value: any, ...args: any[]): IButton[] {
    if (args[0]) {
      value.splice(1, 1);
      return value;
    }
    return value.slice(0, 2);
  }
}
