import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-main-tools-section',
  templateUrl: './main-tools-section.component.html',
  styleUrls: ['./main-tools-section.component.scss']
})
export class MainToolsSectionComponent implements OnInit {

  boxes = [
    { title: 'Teachers', info: 'Personal Info, journal, schedule.' },
    { title: 'Students', info: 'Personal info, schedule, upcoming events and tests.' },
    { title: 'Parents',  info: 'Personal info, monitoring for marks kids.' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
