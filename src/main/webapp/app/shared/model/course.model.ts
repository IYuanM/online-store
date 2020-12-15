import { IStudent } from 'app/shared/model/student.model';

export interface ICourse {
  id?: number;
  coursename?: string;
  student?: IStudent;
}

export class Course implements ICourse {
  constructor(public id?: number, public coursename?: string, public student?: IStudent) {}
}
