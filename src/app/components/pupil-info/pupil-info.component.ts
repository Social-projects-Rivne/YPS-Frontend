import { Component, OnInit } from '@angular/core';
import { IPupil } from 'src/app/models/IPupil';
import { PageService } from 'src/app/services/page-title/page.service';
import { PupilinfoService } from 'src/app/services/pupils/pupilinfo.service';

@Component({
  selector: 'yps-pupil-info',
  templateUrl: './pupil-info.component.html',
  styleUrls: ['./pupil-info.component.scss']
})
export class PupilInfoComponent implements OnInit {

  pupil: IPupil = null;
  constructor(private pageService: PageService, private userService: PupilinfoService) { }

  ngOnInit(): void {
    this.userService.getPupilByID()
      .subscribe(response => {
        this.pupil = response;
      });
  }

}
