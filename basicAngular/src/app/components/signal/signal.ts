import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  empName: string = "Chandan";

  empMobileNo = signal("654691005687");
  isActive: WritableSignal<boolean> = signal(false);
  cityListSignal: WritableSignal<string[]> = signal(['Delhi', 'Chennai', "Patna", 'Pune']);

  constructor(){
    console.log(this.empMobileNo())
    console.log(this.isActive())
    console.log(this.cityListSignal())

    setTimeout(()=> {
      this.empName = "Tittu";  // this will not update in UI
      // debugger;
    }, 2000);

    setTimeout(() => {
      // debugger;
      this.empMobileNo.set("11111111111111");
      // debugger;
    }, 2000);
  }


  changeEmpName(){
    this.empName = "Kittu";
  }
  changeEmpMobileNo(){
    this.empMobileNo.set("008078964");
  }
}
