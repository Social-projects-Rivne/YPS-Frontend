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
  classworkTypeId: number = 1;
  homeworkTypeId: number = 2;
  testTypeId: number = 3;
  form: FormGroup;

  @Output() lessonMarks = new EventEmitter<IPupilLessonMarks[]>();

  marks: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Absent"];

  pupilLessonMarks: IPupilLessonMarks[]=[{
    pupilId: undefined,
    value: undefined,
    type: undefined
  }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (typeof (this.index) == "number") {
      this.index = this.index + 1;
    }
    this.form = this.formBuilder.group({
      "classwork": [null],
      "homework":[null],
      "test": [null]
    });
    this.pupilLessonMarks.pop();
    this.form.controls.classwork.valueChanges.subscribe(value =>{
      let mark: IPupilLessonMarks = {
        pupilId: undefined,
        value: undefined,
        type: undefined
      }
      mark.pupilId = this.pupilShortInfo.id;
      mark.value = value;
      mark.type = this.classworkTypeId;
      this.pupilLessonMarks.push(mark);
    });
    this.form.controls.homework.valueChanges.subscribe(value =>{
      let mark: IPupilLessonMarks = {
        pupilId: undefined,
        value: undefined,
        type: undefined
      }
      mark.pupilId = this.pupilShortInfo.id;
      mark.value = value;
      mark.type = this.homeworkTypeId;
      this.pupilLessonMarks.push(mark);
    });
    this.form.controls.test.valueChanges.subscribe(value =>{
      let mark: IPupilLessonMarks = {
        pupilId: undefined,
        value: undefined,
        type: undefined
      }
      mark.pupilId = this.pupilShortInfo.id;
      mark.value = value;
      mark.type = this.testTypeId;
      this.pupilLessonMarks.push(mark);
    });
    this.lessonMarks.emit(this.pupilLessonMarks);
  }
}