import { Component, OnInit, Input } from '@angular/core';
import { ILessonDay } from 'src/app/models/ILessonDay';

@Component({
  selector: 'yps-lesson-day-card',
  templateUrl: './lesson-day-card.component.html',
  styleUrls: ['./lesson-day-card.component.scss']
})
export class LessonDayCardComponent implements OnInit {
  @Input() day: ILessonDay;

  constructor() { }

  ngOnInit(): void {
  }
}