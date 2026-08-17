import { JsonPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  companyObj = {
    companyId: 0,
    companyName: '',
    pinCode: '',
    address: '',
    phone: '',
  };

  onSaveCompany(formRef: any){
    console.log(formRef)
    const formValue = this.companyObj;
    // debugger;
  }
}
