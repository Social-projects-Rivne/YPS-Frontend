import { ILessonItem } from './ILessonItem';

export interface ILessonDay {
  dayName: string;
  date: string;
  items: ILessonItem[];
}