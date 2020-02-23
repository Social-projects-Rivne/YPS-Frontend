import { Component, OnInit} from '@angular/core';
import { PageService } from 'src/app/services/page-title/page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadMasterService } from 'src/app/services/head-master/head-master.service';
import { IRegisterHeadMasterLink } from 'src/app/models/IRegisterHeadMasterLink';

@Component({
  selector: 'yps-register-headmaster',
  templateUrl: './register-headmaster.component.html',
  styleUrls: ['./register-headmaster.component.scss']
})
export class RegisterHeadmasterComponent implements OnInit {

  constructor(private pageService: PageService,private _router:Router,private _route:ActivatedRoute,private _masterService:HeadMasterService) { }

  registerLink:IRegisterHeadMasterLink

  ngOnInit() {
    this.pageService.set('YPS | Headmaster');
    console.log(this._route.snapshot.paramMap.get('link'));
    this._masterService.check(this._route.snapshot.paramMap.get('link')).subscribe(p=>{
      console.log(p.schoolId);
      this.registerLink=p;
      if(this.registerLink.isValid==false){
        this._router.navigateByUrl("404");
      }
    })

  }
}
