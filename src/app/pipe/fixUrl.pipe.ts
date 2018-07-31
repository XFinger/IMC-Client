import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixUrlPipe'
})
export class FixUrlPipe implements PipeTransform {

  transform(string) {
    return  "http://localhost:3000" + string
  }

}
