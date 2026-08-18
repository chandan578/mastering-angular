import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

  empModel = signal({
    empName: '',
    empCity: '',
    empState: ''
  });

  empForm = form(this.empModel, (schema)=>{
    required(schema.empName, {message: 'This is required.'}),
    required(schema.empCity, {message: 'This is required.'}),
    minLength(schema.empCity, 4, {message: "Min 4 character needed."}),
    minLength(schema.empName, 4, {message: "Min 4 character needed."})
  });



  saveEmpData(){
    const empData = this.empForm().value();
    debugger;
  }

}
