import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IShortInfoPupil } from 'src/app/models/IShortInfoPupil';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { IPupilLessonMark } from 'src/app/models/IPupilLessonMark';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IFormField } from 'src/app/models/IFormField';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { validationHelper } from 'src/utils/helpers/validation-helper';

@Component({
  selector: 'yps-journal-column',
  templateUrl: './journal-column.component.html',
  styleUrls: ['./journal-column.component.scss']
})
export class JournalColumnComponent implements OnInit {
  lessonId: number;
  classId: number;
  pupils: IShortInfoPupil[];
  lessonMarks: IPupilLessonMark[] = [];
  form: FormGroup;
  fields: IFormField[] = [
    {
      id: "work-info-field",
      type: "text",
      label: "topic of the lesson",
      placeholder: "enter topic of lesson",
      name: "topic",
      errorMsg: null
    }];

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private httpOtionsService: HttpOptionsService, 
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "topic": [null, requiredValidator("topic is required")],
    });

    this.getLessonIdClassId();
    this.getPupils();
  }

  addMarks = (pupilLessonMarks: IPupilLessonMark[]) => {
    if(pupilLessonMarks.length != 0) {
      pupilLessonMarks = pupilLessonMarks.filter(x => x.value != null);
      pupilLessonMarks.forEach(mark => {
        this.lessonMarks = this.lessonMarks.filter(x => {
          if(x.pupilId == mark.pupilId && x.typeId == mark.typeId)
            return false;
          
          return true;
        });
        this.lessonMarks.push(mark);
      });
    }
  }

  getLessonIdClassId = () => {
    this.lessonId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.classId = parseInt(this.route.snapshot.paramMap.get('classId'));
  }

  getPupils = () => {
    this.httpOtionsService.loadHeaders();
    return this.http.get(apiUrl + `/Pupils/GetByClass/${this.classId}`, this.httpOtionsService.options)
      .subscribe(
        (response: IShortInfoPupil[]) => {
          this.pupils = response;
        }
      );
  }
  onSubmit() {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);

    this.httpOtionsService.loadHeaders();

    this.fields = thisFormValidationResponse.fields;
    if (thisFormValidationResponse.isValid) {
      const { topic } = this.form.value;

      this.http.post(apiUrl + "/JournalColumn", { topic: topic, lessonId: this.lessonId, classId: this.classId, lessonMarks: this.lessonMarks }, this.httpOtionsService.options)
      .subscribe((successRes: any) => {
        console.log('add journal column with id ', successRes);
        this.router.navigate([`/teacher/lessons`]);
      });
    }
  }
}