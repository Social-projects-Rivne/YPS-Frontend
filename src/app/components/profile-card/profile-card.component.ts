import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: IUser;
  constructor() { }

  ngOnInit(): void {
  }
}
