import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShortInfoPupil } from 'src/app/models/IShortInfoPupil';
import { IPupilLessonMarks } from 'src/app/models/IPupilLessonMarks';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yps-journal-column-item',
  templateUrl: './journal-column-item.component.html',
  styleUrls: ['./journal-column-item.component.scss']
})
export class JournalColumnItemComponent implements OnInit {
  @Input() pupilShortInfo: IShortInfoPupil;
  @Input() index: number;
  @Output() lessonMarks = new EventEmitter<IPupilLessonMarks>();
  form: FormGroup;

  marks: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Absent"];

  pupilLessonMarks: IPupilLessonMarks = {
    pupilId: undefined,
    classwork: undefined,
    homework: undefined,
    test: undefined
  };

  id = 0;
  classwork = "";
  homework = "";
  test = "";


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (typeof (this.index) == "number") {
      this.index = this.index + 1;
    }
    this.id = this.pupilShortInfo.id;
     this.form = this.formBuilder.group({
      "classwork": [null]
    });
    this.form.controls.classwork.valueChanges.subscribe(classwork =>{
      console.log(`Value ${classwork} `);
      console.log(`Value ${this.pupilShortInfo.id} `);
      this.pupilLessonMarks.pupilId = this.id;
      this.pupilLessonMarks.classwork = classwork;
      this.pupilLessonMarks.homework = this.homework;
      this.pupilLessonMarks.test = this.test;

      this.lessonMarks.emit(this.pupilLessonMarks);
    });
  }
}