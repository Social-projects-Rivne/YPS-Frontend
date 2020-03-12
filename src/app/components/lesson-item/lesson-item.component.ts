import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ILessonItem } from 'src/app/models/ILessonItem';
import { Router } from '@angular/router';

@Component({
  selector: 'yps-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
  @Input() item: ILessonItem;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/teacher/journalcolumn', {id: this.item.id, classId: this.item.classId, teacherId: this.item.teacherId}])
  }
}