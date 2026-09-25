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