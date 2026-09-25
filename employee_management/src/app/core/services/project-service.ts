import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../globalConstants/Global.constant';
import { Observable } from 'rxjs';
import { INewProjectModel, IProject } from '../model/interfaces/Project.model';

@Service()
export class ProjectService {

    http = inject(HttpClient)

    getAllProject(): Observable<IProject[]>{
        return this.http.get<IProject[]>(environment.API_URL+ GlobalConstant.API_METHOD.GET_ALL_PROJECT);
    }

    createProject(obj: INewProjectModel):Observable<INewProjectModel>{
        return this.http.post<INewProjectModel>(environment.API_URL + GlobalConstant.API_METHOD.CREATE_PROJECT, obj);
    }
}
