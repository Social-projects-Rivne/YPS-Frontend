import { IJournalColumnMark } from './IJournalColumnMark';

export interface IJournalColumnDate {
    lessonDate: string;
    discipline: string;
    topic: string;
    marks: IJournalColumnMark[];
}
