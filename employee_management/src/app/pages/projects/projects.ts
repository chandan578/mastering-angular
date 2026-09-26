import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../core/services/project-service';
import {
  IAssignProjectEmp,
  INewProjectModel,
  IProject,
  IProjectEmpDetail,
} from '../../core/model/interfaces/Project.model';
import { AsyncPipe, DatePipe } from '@angular/common';
import { EmployeeService } from '../../core/services/employee-service';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../core/model/classes/Employee.model';

@Component({
  imports: [ReactiveFormsModule, DatePipe, AsyncPipe, FormsModule],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  projectForm!: FormGroup;
  projectService = inject(ProjectService);
  // projectList: WritableSignal<IProject[]> = signal([]);
  projectList = signal<IProject[]>([]);
  projectEmpList: WritableSignal<IProjectEmpDetail[]> = signal([]);
  empService = inject(EmployeeService);
  empList: Observable<EmployeeModel[]> = new Observable<EmployeeModel[]>();
  @ViewChild('empModel') modalForm!: ElementRef;
  currSelectedEmp: WritableSignal<any> = signal<any[]>([]);
  currProjectId: number = 0;

  ngOnInit(): void {
    this.initializeForm();
    this.loadProject();
    this.loadEmpProject();
    this.empList = this.empService.getALlEmployees();
  }

  assignObj: any = {
    empProjectId: 0,
    projectId: 0,
    empId: 0,
    assignedDate: new Date(),
    role: '',
    isActive: false,
    projectName: '',
    employeeName: '',
  };

  initializeForm() {
    this.projectForm = new FormGroup({
      projectId: new FormControl(0),
      projectName: new FormControl(''),
      clientName: new FormControl(''),
      startDate: new FormControl(''),
      leadByEmpId: new FormControl(0),
      contactPerson: new FormControl(''),
      contactNo: new FormControl(''),
      emailId: new FormControl(''),
    });
  }

  loadProject() {
    this.projectService.getAllProject().subscribe({
      next: (res: IProject[]) => {
        // debugger
        this.projectList.set(res);
        // console.log(this.projectList)
      },
    });
  }

  loadEmpProject(projectId?: number) {
    this.projectService.getAllProjectEmp().subscribe({
      next: (res: IProjectEmpDetail[]) => {
        this.projectEmpList.set(res);
        if (projectId !== undefined) {
          this.currSelectedEmp.set(
            res.filter((assignment) => assignment.projectId === projectId),
          );
        }
      },
    });
  }
  openEmpModal(projectId: number) {
    this.currProjectId = projectId;
    this.assignObj.projectId = projectId;
    this.currSelectedEmp.set(this.projectEmpList().filter(
      (assignment) => assignment.projectId === projectId,
    ));
    debugger;
    if (this.modalForm) {
      this.modalForm.nativeElement.style.display = 'block';
    }
  }
  closeEmpModal() {
    if (this.modalForm) {
      this.modalForm.nativeElement.style.display = 'none';
    }
  }

  assignEmp(){
    this.assignObj.projectId = this.currProjectId;
    this.projectService.assignProjectEmp(this.assignObj).subscribe({
      next:(res: IAssignProjectEmp)=>{
        alert("Employee assign successfully....")
        this.loadEmpProject(this.currProjectId);
      }
    })
  }

  onSaveProject() {
    const formValue: INewProjectModel = this.projectForm.value;
    debugger;
    this.projectService.createProject(formValue).subscribe({
      next: (res: INewProjectModel) => {
        debugger;
        alert('Project created...');
        this.loadProject();
      },
    });
  }
}
