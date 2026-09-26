export interface IDashboardEmployee {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;
  createdDate: string;
}

export interface IDashboardProject {
  projectId: number;
  projectName: string;
  clientName: string;
  startDate: string;
  leadByEmpId: number;
  contactPerson: string;
  contactNo: string;
  emailId: string;
}

export interface IDashboardResponse {
  totalEmployee: number;
  totalProject: number;
  recentEmployee: IDashboardEmployee[];
  recentProjects: IDashboardProject[];
}