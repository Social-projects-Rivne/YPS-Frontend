import { IJournalColumnMark } from './IJournalColumnMark';

export interface IJournalColumn {
    lessonDate: string;
    discipline: string;
    topic: string;
    marks: IJournalColumnMark[];
}
