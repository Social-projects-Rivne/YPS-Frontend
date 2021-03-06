import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-pupil-info-card',
  templateUrl: './pupil-info-card.component.html',
  styleUrls: ['./pupil-info-card.component.scss']
})
export class PupilInfoCardComponent implements OnInit {
  constructor(
    public userService: UserService
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