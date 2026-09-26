import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IApiResponseModel } from '../model/interfaces/User.model';
import { IDashboardResponse } from '../model/interfaces/Dashboard.model';
import { GlobalConstant } from '../globalConstants/Global.constant';

@Service()
export class MasterService {

    http = inject(HttpClient)

    getAllParentDept():Observable<IApiResponseModel> {
        return this.http.get<IApiResponseModel>(environment.API_URL+ "GetParentDepartment");
    }

    getAllChildByParentDept(id: number):Observable<IApiResponseModel> {
        return this.http.get<IApiResponseModel>(environment.API_URL+ "GetChildDepartmentByParentId?deptId="+id);
    }

    getDashboard(): Observable<IDashboardResponse> {
        return this.http.get<IDashboardResponse>(
            environment.API_URL + GlobalConstant.API_METHOD.GET_DASHBOARD
        );
    }
}
