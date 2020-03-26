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
  visibleStart: string;
  visibleEdit: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.item.isFinished == true) {
      this.visibleStart = "hidden";
      this.visibleEdit = "show";
    }
    else {
      this.visibleStart = "show";
      this.visibleEdit = "hidden";
    }
  }

  onClick() {
    this.router.navigate(['/teacher/journalcolumn', { id: this.item.id, classId: this.item.classId, teacherId: this.item.teacherId }])
  }
}