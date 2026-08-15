import { Component } from '@angular/core';

@Component({
  selector: 'app-veriables',
  imports: [],
  templateUrl: './veriables.html',
  styleUrl: './veriables.css',
})
export class Veriables {

  studentName: string = 'John Doe';
  studentAge: number = 20;
  studentCity: string = 'New York';

  teacherName = "Jane Smith";

  cityList: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];
  rollNoList: number[] = [1, 2, 3, 4, 5];

  student = {
    name: 'John Doe',
    age: 20,
    city: 'New York'
  }
  
  studentList = [
    { name: 'John Doe', age: 20, city: 'New York' },
    { name: 'Jane Smith', age: 22, city: 'Los Angeles' },
    { name: 'Michael Johnson', age: 19, city: 'Chicago' },
    { name: 'Emily Davis', age: 21, city: 'Houston' },
    { name: 'William Brown', age: 23, city: 'Phoenix' }
  ];


  
}
