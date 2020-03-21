import { IPupil } from '../../models/IPupil';
import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../../services/pupils/pupils.service';

@Component({
  selector: 'yps-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss', '../../../scss/cabinet-sub-pages.scss']
})

export class PupilsComponent implements OnInit {
  constructor(public pupilsService: PupilsService) {}

  ngOnInit() {
    this.pupilsService.getPupils();
  }
}
