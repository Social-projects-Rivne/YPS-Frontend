import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'yps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.append(' | Login');
  }

}
