import { ILink } from 'src/app/models/ILink';

export const masterLinks: ILink[] = [
  {
    value: "profile",
    path:'./',
    icon:"account_circle"
  },
  {
    value: "pupils",
    path:'./pupils',
    icon:"face"
  },
  {
    value: "parents",
    path: './parents',
    icon: "supervised_user_circle"
  },
  {
    value: "teachers",
    path: './teachers',
    icon: "emoji_people"
  },
  {
    value: "classes",
    path: './classes',
    icon:"school"
  }
];
