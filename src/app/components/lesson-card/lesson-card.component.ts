import { Component, OnInit, Input } from '@angular/core';
import { ILessonDay } from 'src/app/models/ILessonDay';

@Component({
  selector: 'yps-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss']
})
export class LessonCardComponent implements OnInit {
  @Input() days: ILessonDay[];
  
  constructor() { }

  ngOnInit(): void {
  }
}