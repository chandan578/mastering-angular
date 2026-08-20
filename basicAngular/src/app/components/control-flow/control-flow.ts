import { Component, inject, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isToggleDiv: boolean = true;
  isOffer: boolean = true;
  orderStatus: string = 'failed';
  masterService = inject(Master);

  cityList = ['Delhi', "Banglore", "Pune", "Patna", "Mumbai"]
  originalCardNo: string = "1234189401238590";
  formattedCardNo: string = '';

  constructor(){
    this.formattedCardNo = this.masterService.getFormattedCardNo(this.originalCardNo);
    debugger;
  }

  isToggleDiv1() {
    this.isToggleDiv = !this.isToggleDiv;
  }

  studentList = [
    {studentId: "ab67", name: 'John', age: 20, city: 'New York', rollNo: 101, course: 'Mathematics' },
    {studentId: "cd89", name: 'Alice', age: 22, city: 'Los Angeles', rollNo: 102, course: 'Physics' },
    {studentId: "ef01", name: 'Bob', age: 19, city: 'Chicago', rollNo: 103, course: 'Chemistry' },
    {studentId: "gh23", name: 'Eve', age: 21, city: 'Houston', rollNo: 104, course: 'Biology' },
    {studentId: "ij45", name: 'Charlie', age: 23, city: 'San Francisco', rollNo: 105, course: 'Computer Science' },
    {studentId: "kl67", name: 'David', age: 20, city: 'Boston', rollNo: 106, course: 'Engineering' },
    {studentId: "mn89", name: 'Frank', age: 22, city: 'Seattle', rollNo: 107, course: 'History' },
    {studentId: "op01", name: 'Grace', age: 19, city: 'Miami', rollNo: 108, course: 'Art' },
    {studentId: "qr23", name: 'Hannah', age: 21, city: 'Denver', rollNo: 109, course: 'Music' },
    {studentId: "st45", name: 'Ian', age: 23, city: 'Atlanta', rollNo: 110, course: 'Literature' }
  ];

  selectedStudent = "Select a student";

  storeLoggedUser(){
    debugger;
    this.masterService.loggedUser = "chandan";
  }

}
