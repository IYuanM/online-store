import { ICourse } from 'app/shared/model/course.model';

export interface IStudent {
  id?: number;
  name?: string;
  courses?: ICourse[];
}

export class Student implements IStudent {
  constructor(public id?: number, public name?: string, public courses?: ICourse[]) {}
}
