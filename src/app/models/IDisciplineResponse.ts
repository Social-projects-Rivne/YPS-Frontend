import {IDisciplineToSelect} from './IDisciplineToSelect'

export interface IDisciplineResponse {
  disciplines: IDisciplineToSelect[];
  isClassTeacher: boolean;
  classId: number;
}
