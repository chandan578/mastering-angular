import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNoFormatter',
})
export class CardNoFormatterPipe implements PipeTransform {
  transform(value: string): unknown {
    const lastFourDigit = value.slice(-4);
    return '**** **** **** '+lastFourDigit;
  }
}
