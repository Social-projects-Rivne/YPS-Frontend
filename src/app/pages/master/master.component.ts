import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { IFormField } from 'src/app/models/IFormField';

@Component({
  selector: 'yps-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  fields: IFormField[] = [
    {
      id: "email-field",
      type: "text",
      label: "email",
      placeholder: "enter your email",
      name: "email",
      errorMsg: null
    },
    {
      id: "password-field",
      type: "password",
      label: "password",
      placeholder: "enter your password",
      name: "password",
      errorMsg: null
    },
  ];
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.set('YPS | Master');
  }
}
