import { Component, OnInit} from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'yps-register-headmaster',
  templateUrl: './register-headmaster.component.html',
  styleUrls: ['./register-headmaster.component.scss']
})
export class RegisterHeadmasterComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.set('YPS | Headmaster');
  }
}
