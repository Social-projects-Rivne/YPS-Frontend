import { Component, OnInit, Input, Output } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { PageService } from 'src/app/services/page-title/page.service';
import { IPupil } from 'src/app/models/IPupil';
import { PupilinfoService } from 'src/app/services/pupils/pupilinfo.service';

@Component({
  selector: 'yps-pupil-cabinet',
  templateUrl: './pupil-cabinet.component.html',
  styleUrls: ['./pupil-cabinet.component.scss']
})
export class PupilCabinetComponent implements OnInit {

  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './',
      icon: 'account_circle'
    },
    {
      value: 'Events',
      path: './events',
      icon: 'view_list'
    },
    {
      value: 'Tests',
      path: './tests',
      icon: 'view_list'
    },
    {
      value: 'Schedule',
      path: './schedules',
      icon: 'event'
    },
    {
      value: 'Materials',
      path: './materials',
      icon: 'menu_book'
    },
    {
      value: 'Journal',
      path: './journal',
      icon: 'assignment'
    }
  ];

  pupil: IPupil = null;
  constructor(private pageService: PageService, private userService: PupilinfoService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Pupil");
    this.userService.getPupilByID()
      .subscribe(response => {
        this.pupil = response;
      });
  }

}