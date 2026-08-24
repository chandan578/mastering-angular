import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardNoFormatterPipe } from '../../pipes/card-no-formatter-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, SlicePipe, JsonPipe, DatePipe, CardNoFormatterPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  studentName: string = 'Chandan Kumar';

  studentAddress: string = "Laxminagar, New Delhi, Near HDFC ATM";

  productPrize: number = 1222345.23592;

  rollNo = [11, 12, 13, 14, 15, 16, 17];

  studentObj = {
    name: 'Chandan Kumar',
    city: 'Delhi',
    branch: 'CSE'
  }

  date: Date = new Date();

  cardNo: string = '123421456097';

}
