import { Component, OnInit } from '@angular/core';
import { PupilsService } from 'src/app/services/pupils/pupils.service';

@Component({
  selector: 'yps-pupil-list',
  templateUrl: './pupil-list.component.html',
  styleUrls: ['./pupil-list.component.scss']
})
export class PupilListComponent implements OnInit {
  constructor(public pupilsService: PupilsService) {}

  ngOnInit(): void {
    this.pupilsService.getPupils();
  }
}
