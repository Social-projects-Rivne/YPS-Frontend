import { Component, OnInit } from '@angular/core';
import { IPupil } from 'src/app/models/IPupil';
import { ParentService } from 'src/app/services/parents/parent.service';

@Component({
  selector: 'yps-children-info',
  templateUrl: './children-info.component.html',
  styleUrls: ['./children-info.component.scss']
})
export class ChildrenInfoComponent implements OnInit {
  constructor( 
    private service: ParentService
  ) { }
  
  pupils: IPupil[];
  
  getPupilsDataByParent = () => {
    this.service.getPupilsInfoByParent()
      .subscribe(data => this.pupils = data)
  }

  ngOnInit(): void {
    this.getPupilsDataByParent();
  }
}
