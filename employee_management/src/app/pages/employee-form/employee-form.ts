import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EmployeeModel } from '../../core/model/classes/Employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee-service';
import { MasterService } from '../../core/services/master-service';
import { IApiResponseModel, IChildDept, IParentDep } from '../../core/model/interfaces/User.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-employee-form',
  styleUrl: './employee-form.css',
  templateUrl: './employee-form.html',
})
export class EmployeeForm implements OnInit {

  employeeObj: EmployeeModel = new EmployeeModel();

  empService = inject(EmployeeService);
  masterService = inject(MasterService);
  activedRoute = inject(ActivatedRoute)

  partentDeptList: WritableSignal<IParentDep[]> = signal([]);
  childDeptList: WritableSignal<IChildDept[]> = signal([]);
  
  currentEmpId:number = 0;

  ngOnInit(): void {
    this.activedRoute.params.subscribe({
      next:(res: any)=>{
        // debugger
        this.currentEmpId = res.id;
        if(this.currentEmpId != 0){
          this.getEmpDetails(this.currentEmpId);
        }
      }
    })


    this.getParent();

  }

  getParent(){
    this.masterService.getAllParentDept().subscribe({
      next:(res : IApiResponseModel)=>{
        this.partentDeptList.set(res.data);
      }
    })
  }

  getEmpDetails(id : number){
    this.empService.getEmployeeById(id).subscribe({
      next:(res: EmployeeModel)=>{
        this.employeeObj = res;
      }
    })
  }

  onChangeDept(event: any){
    const id = event.target.value;
    this.masterService.getAllChildByParentDept(id).subscribe({
      next:(res: IApiResponseModel)=>{
        this.childDeptList.set(res.data);
      }
    })
  }

  onSaveEmp(){
    this.empService.OnCreateEmployee(this.employeeObj).subscribe({
      next:(res: EmployeeModel)=>{
        alert("Employee created successfully...")
      }, error: (err: any)=>{

      }
    })
  }


}
