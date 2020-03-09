import { IScheduleDay } from 'src/app/models/IScheduleDay';

export const days: IScheduleDay[] = [
  {
    id: 1,
    dayName: 'monday',
    date: "march 9",
    items: [
      {
        id: 1,
        lessonNumber: 1,
        discipline: "algebra",
        auditoriumNumber: 4,
        auditoriumName: "auditorium of algebra",
        lessonTimeGap: "8:00 - 8:45 AM"
      },
      {
        id: 2,
        lessonNumber: 2,
        discipline: "geography",
        auditoriumNumber: 29,
        auditoriumName: "geography auditorium",
        lessonTimeGap: "8:55 - 9:40 AM"
      },
      {
        id: 3,
        lessonNumber: 3,
        discipline: "english",
        auditoriumNumber: 17,
        auditoriumName: null,
        lessonTimeGap: "9:50 - 10:35 AM"
      }
    ]
  },
  {
    id: 2,
    dayName: 'tuesday',
    date: "march 10",
    items: [
      {
        id: 4,
        lessonNumber: 1,
        discipline: "algebra",
        auditoriumNumber: 4,
        auditoriumName: "auditorium of algebra",
        lessonTimeGap: "8:00 - 8:45 AM"
      },
      {
        id: 5,
        lessonNumber: 2,
        discipline: "english",
        auditoriumNumber: 17,
        auditoriumName: null,
        lessonTimeGap: "8:55 - 9:40 AM"
      }
    ]
  },
  {
    id: 3,
    dayName: 'wednesday',
    date: "march 11",
    items: [
      {
        id: 6,
        lessonNumber: 1,
        discipline: "english",
        auditoriumNumber: 19,
        auditoriumName: "main english auditorium",
        lessonTimeGap: "8:00 - 8:45 AM"
      },
      {
        id: 7,
        lessonNumber: 2,
        discipline: "algebra",
        auditoriumNumber: 4,
        auditoriumName: "auditorium of algebra",
        lessonTimeGap: "8:55 - 9:40 AM"
      },
      {
        id: 8,
        lessonNumber: 3,
        discipline: "geography",
        auditoriumNumber: 29,
        auditoriumName: "geography auditorium",
        lessonTimeGap: "9:50 - 10:35 AM"
      },
      {
        id: 9,
        lessonNumber: 4,
        discipline: "history",
        auditoriumNumber: 43,
        auditoriumName: "the cabinet of world history",
        lessonTimeGap: "10:45 - 11:30 AM"
      },
    ]
  },
  {
    id: 1,
    dayName: 'thursday',
    date: "march 12",
    items: [
      {
        id: 1,
        lessonNumber: 1,
        discipline: "algebra",
        auditoriumNumber: 4,
        auditoriumName: "auditorium of algebra",
        lessonTimeGap: "8:00 - 8:45 AM"
      },
      {
        id: 2,
        lessonNumber: 2,
        discipline: "geography",
        auditoriumNumber: 29,
        auditoriumName: "geography auditorium",
        lessonTimeGap: "8:55 - 9:40 AM"
      },
      {
        id: 3,
        lessonNumber: 3,
        discipline: "english",
        auditoriumNumber: 17,
        auditoriumName: null,
        lessonTimeGap: "9:50 - 10:35 AM"
      }
    ]
  },
  {
    id: 5,
    dayName: 'friday',
    date: "march 13",
    items: [
      {
        id: 4,
        lessonNumber: 1,
        discipline: "algebra",
        auditoriumNumber: 4,
        auditoriumName: "auditorium of algebra",
        lessonTimeGap: "8:00 - 8:45 AM"
      },
      {
        id: 5,
        lessonNumber: 2,
        discipline: "english",
        auditoriumNumber: 17,
        auditoriumName: null,
        lessonTimeGap: "8:55 - 9:40 AM"
      }
    ]
  },
  {
    id: 6,
    dayName: 'saturday',
    date: "march 14",
    items: []
  },
  {
    id: 7,
    dayName: 'sunday',
    date: "march 15",
    items: []
  }
];