import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShortInfoPupil } from 'src/app/models/IShortInfoPupil';
import { IPupilLessonMark } from 'src/app/models/IPupilLessonMark';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yps-journal-column-item',
  templateUrl: './journal-column-item.component.html',
  styleUrls: ['./journal-column-item.component.scss']
})
export class JournalColumnItemComponent implements OnInit {
  @Input() pupilShortInfo: IShortInfoPupil;
  @Input() index: number;
  form: FormGroup;
  @Output() selectedMarks = new EventEmitter<IPupilLessonMark[]>();

  marks: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Absent"];

  pupilLessonMarks: IPupilLessonMark[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (typeof (this.index) == "number") {
      this.index = this.index + 1;
    }

    this.form = this.formBuilder.group({
      "classwork": [null],
      "homework": [null],
      "test": [null]
    });

    this.form.valueChanges.subscribe(value =>{
      let valueKeys = Object.keys(value);

      valueKeys.forEach(key => {
        let mark: IPupilLessonMark = {
          pupilId: this.pupilShortInfo.id,
          value: value[key],
          typeId: key == "classwork" ? 1 : key == "homework" ? 2 : 3
        }
        this.pupilLessonMarks.push(mark);
      });

      this.addMarks();
    });
  }

  addMarks = () => {
    this.selectedMarks.emit(this.pupilLessonMarks);
  }
}