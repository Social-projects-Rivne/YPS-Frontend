import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentsService } from 'src/app/services/parents/parents.service';
import { IUser } from 'src/app/models/IUser';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';
import { IJournalColumn } from 'src/app/models/IJournalColumn';
import { IDisciplineToSelect } from 'src/app/models/IDisciplineToSelect';
import { FormGroup, FormBuilder } from '@angular/forms';
import { requiredValidator } from 'src/utils/validators/required-validator';

@Component({
  selector: 'yps-children-info',
  templateUrl: './children-info.component.html',
  styleUrls: ['./children-info.component.scss']
})
export class ChildrenInfoComponent implements OnInit {
  constructor(
    private parentsService: ParentsService,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private formBuilder: FormBuilder
  ) { }

  pupils: IUser[];

  user: IUser[] = null;
  
  selectedPupilId: number;
  activeTab: string = "profile";

  journalColumns: IJournalColumn[];
  disciplines: IDisciplineToSelect[];
  form: FormGroup;


  changeTab(name: string){
    this.activeTab = name;
  }

  reset = () => {
    this.user = null;
    this.form.reset();
  }

  selectPupil = (id: number) => {
    this.http.get(apiUrl + "/Parents/GetPupilAsParent/" + id, this.httpOptionsService.options)
    .subscribe(
      (successRes: IUser[]) => {
        this.user = successRes;
        this.selectedPupilId = id;
      }
    );
  }

  getPupilsDataByParent = () => {
    this.parentsService.getPupilsByParent()
    .subscribe(
      (successRes: IUser[]) => {
        this.pupils = successRes;
      }
    );
  }

  ngOnInit(): void {
    this.getPupilsDataByParent();
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
      "disciplineId": [null, requiredValidator("disciplines is required")]
    })

    this.http.get(`${apiUrl}/Disciplines/GetAllDisciplinesBySchool`, this.httpOptionsService.options)
    .subscribe(
      (successRes: IDisciplineToSelect[]) => {
        this.disciplines = successRes;
      }
    );

    this.form.controls.disciplineId.valueChanges.subscribe(value => {
      this.http.get(`${apiUrl}/Marks/${value}/${this.selectedPupilId}`, this.httpOptionsService.options)
        .subscribe(
          (succesRes: IJournalColumn[]) => {
            this.journalColumns = succesRes;
          }
        );
    });
  }
}
