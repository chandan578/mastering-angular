import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../core/services/project-service';
import { INewProjectModel, IProject } from '../../core/model/interfaces/Project.model';
import { AsyncPipe, DatePipe } from '@angular/common';
import { EmployeeService } from '../../core/services/employee-service';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../core/model/classes/Employee.model';

@Component({
  imports: [ReactiveFormsModule, DatePipe, AsyncPipe],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects implements OnInit {


  projectForm!: FormGroup;
  projectService = inject(ProjectService);
  // projectList: WritableSignal<IProject[]> = signal([]);
  projectList = signal<IProject[]>([]);
  empService = inject(EmployeeService)
  empList: Observable<EmployeeModel[]> = new Observable<EmployeeModel[]>;

  ngOnInit(): void {
    this.initializeForm();
    this.loadProject();
    this.empList = this.empService.getALlEmployees();
  }

  initializeForm() {
    this.projectForm = new FormGroup({
      projectId: new FormControl(0),
      projectName: new FormControl(""),
      clientName: new FormControl(""),
      startDate: new FormControl(""),
      leadByEmpId: new FormControl(0),
      contactPerson: new FormControl(""),
      contactNo: new FormControl(""),
      emailId: new FormControl(""),
    });
  }

  loadProject(){
    this.projectService.getAllProject().subscribe({
      next:(res: IProject[])=>{
        debugger
        this.projectList.set(res);
        console.log(this.projectList)
      }
    })
  }


  onSaveProject(){
    const formValue: INewProjectModel = this.projectForm.value;
    debugger
    this.projectService.createProject(formValue).subscribe({
      next:(res : INewProjectModel)=>{
        debugger
        alert("Project created...")
        this.loadProject();
      }
    })
  }
}
