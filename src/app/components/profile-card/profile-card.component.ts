import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yps-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
