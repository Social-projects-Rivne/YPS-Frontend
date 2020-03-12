import { IScheduleItem } from './IScheduleItem';

export interface IScheduleDay {
  dayName: string;
  date: string;
  items: IScheduleItem[];
}