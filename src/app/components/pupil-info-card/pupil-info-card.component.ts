import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParentService } from 'src/app/services/parents/parent.service';
import { ChildrenInfoComponent } from '../children-info/children-info.component';
import { IPupil } from 'src/app/models/IPupil';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/IUser';


@Component({
  selector: 'yps-pupil-info-card',
  templateUrl: './pupil-info-card.component.html',
  styleUrls: ['./pupil-info-card.component.scss']
})
export class PupilInfoCardComponent implements OnInit {
  constructor(
    private service: ParentService, private parent: ChildrenInfoComponent, 
    public userService: UserService, private http: HttpClient,
    private router: Router
  ) { }
  
  @Output() selected = new EventEmitter<any>();
  @Input() pupil: IUser; 
  @Input() index: number | string;

  select() {
    this.selected.emit(this.pupil.id);
  }
  
  ngOnInit(): void {
    if (typeof(this.index) == "number") {
      this.index = this.index + 1;
    }
  }
}
