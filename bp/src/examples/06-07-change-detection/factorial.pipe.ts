import { Pipe, PipeTransform } from '@angular/core';

export const calculateFactorial = (value) => {
  let result = 1;

  for (let index =1 ; index <= value; index++) {
    result = result * index;
  }

  return result;
};

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  public transform(value: number): number {
    console.log('Pipe: Calculating factorial');
    return calculateFactorial(value);
  }

}
