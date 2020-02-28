import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { PageService } from 'src/app/services/page-title/page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/constants/urls';

@Component({
  selector: 'yps-register-headmaster',
  templateUrl: './register-headmaster.component.html',
  styleUrls: ['./register-headmaster.component.scss']
})
export class RegisterHeadmasterComponent implements OnInit {

  constructor(
    private pageService: PageService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  showForm: boolean;

  ngOnInit() {
    this.pageService.set('YPS | Headmaster');
    let link = this.route.snapshot.paramMap.get('link');
    let url = apiUrl + "/Headmasters/action"
    return this.http.get(apiUrl + "/Headmasters/" + link)
      .subscribe(
        (response: boolean) => {
          this.showForm = response;
        },
        (error: any) => {
          this.router.navigate(["/404"]);
        }
      );
  }
}
