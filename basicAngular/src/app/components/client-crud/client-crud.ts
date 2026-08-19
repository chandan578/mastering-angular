import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-crud',
  imports: [FormsModule],
  templateUrl: './client-crud.html',
  styleUrl: './client-crud.css',
})
export class ClientCrud {
  http = inject(HttpClient);
  clientList: WritableSignal<any[]> = signal([]);
  newClientObj: any = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: new Date(),
    logo: '',
  };

  constructor() {
    this.getAllClients();
  }

  getAllClients() {
    this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
      next: (res: any) => {
        // debugger;
        this.clientList.set(res.data);
      },
    });
  }

  onSaveClient(){
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/SmartParking/addclient", this.newClientObj).subscribe({
      next:(res: any) =>{
        debugger;
        if(res.result){
          alert("Client save successfully.");
          this.getAllClients();
        }else{
          alert(res.message);
        }
      }
    })
  }
  onUpdateClient(){
    // debugger;
    this.http.post("https://api.freeprojectapi.com/api/SmartParking/updateClient", this.newClientObj).subscribe({
      next:(res: any) =>{
        // debugger;
        if(res.result){
          alert("Client updated successfully.");
          this.getAllClients();
        }else{
          alert(res.message);
        }
      }
    })
  }

  onDelete(id: number){
    const isConfirm = confirm("Are you sure to delete?");
    if(isConfirm){
      this.http.post("https://api.freeprojectapi.com/api/SmartParking/deleteclient?id="+id, {}).subscribe({
        next:(res : any) =>{
          alert("Client deleted successfully.");
          this.getAllClients();
        }
      })
    }
  }

  onEdit(data: any){
    this.newClientObj = data;
  }
}
