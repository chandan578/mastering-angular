import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeModel } from '../../core/model/classes/Employee.model';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../core/services/employee-service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  imports: [RouterLink, AsyncPipe, DatePipe],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {




  http = inject(HttpClient)
  allEmpListService = inject(EmployeeService)

  allEmpList: Observable<EmployeeModel[]> = new Observable<EmployeeModel[]>;
  
  constructor(){
    this.allEmpList = this.allEmpListService.getALlEmployees();
  }
}
