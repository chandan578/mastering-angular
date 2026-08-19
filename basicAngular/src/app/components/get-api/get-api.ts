import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetAPI {
  http = inject(HttpClient);
  userList: WritableSignal<any[]> = signal([]);
  vendorList: WritableSignal<any[]> = signal([]);

  constructor() {
    this.getAllUsers();
    this.getVendorsList();
  }

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res: any) => {
        // debugger;
        this.userList.set(res);
      },
      error: (err: any) => {},
    });
  }

  getVendorsList() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next: (res: any) => {
        // debugger;
        this.vendorList.set(res);
      },
      error: (err: any) => {},
    });
  }
}
