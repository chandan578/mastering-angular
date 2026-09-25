import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { EmployeeModel } from '../model/classes/Employee.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../globalConstants/Global.constant';

@Service()
export class EmployeeService {

    http = inject(HttpClient)

    constructor(){

    }

    OnCreateEmployee(obj: EmployeeModel):Observable<EmployeeModel>{
        return this.http.post<EmployeeModel>(environment.API_URL+ GlobalConstant.API_METHOD.CREATE_EMPLOYEE, obj);
    }

    getALlEmployees(): Observable<EmployeeModel[]>{
        return this.http.get<EmployeeModel[]>(environment.API_URL+GlobalConstant.API_METHOD.GET_ALL_EMPLOYEE);
    }

    getEmployeeById(id: number): Observable<EmployeeModel>{
        return this.http.get<EmployeeModel>(environment.API_URL+GlobalConstant.API_METHOD.GET_EMPLOYEE+'/'+id);
    }
}
