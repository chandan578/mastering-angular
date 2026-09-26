export interface INewProjectModel {
  projectId: number
  projectName: string
  clientName: string
  startDate: string
  leadByEmpId: number
  contactPerson: string
  contactNo: string
  emailId: string
}

export interface IProject extends INewProjectModel {
  employeeName: string
}

export interface IProjectEmpDetail {
  empProjectId: number
  projectId: number
  empId: number
  assignedDate: string
  role: string
  isActive: boolean
  projectName: string
  employeeName: string
}


export interface IAssignProjectEmp {
  empProjectId: number
  projectId: number
  empId: number
  assignedDate: string
  role: string
  isActive: boolean
}
