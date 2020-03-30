export interface ILessonItem {
    id: number;
    lessonNumber: number;
    lessonDate: string;
    lessonTimeGap: string;
    auditorium: string;
    auditoriumNumber: number;
    disciplineId: number;
    discipline: string;
    classId: number;
    className: string;
    teacherId: number;
    isFinished: boolean;
}