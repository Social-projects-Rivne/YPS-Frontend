import { IScheduleItem } from './IScheduleItem';

export interface IScheduleDay {
  id: number;
  dayName: string;
  date: string;
  items: IScheduleItem[];
}