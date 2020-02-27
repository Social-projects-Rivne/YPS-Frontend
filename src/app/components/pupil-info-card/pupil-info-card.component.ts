import { Component, OnInit, Input } from '@angular/core';
import { ParentService } from 'src/app/services/parents/parent.service';
import { ChildrenInfoComponent } from '../children-info/children-info.component';
import { IParent } from 'src/app/models/IParent';
import { IPupil } from 'src/app/models/IPupil';

@Component({
  selector: 'yps-pupil-info-card',
  templateUrl: './pupil-info-card.component.html',
  styleUrls: ['./pupil-info-card.component.scss']
})
export class PupilInfoCardComponent implements OnInit {

  @Input() user:IPupil;
  @Input() index: number | string;
  
  constructor(private service: ParentService, private parent: ChildrenInfoComponent ) { }

  ngOnInit(): void {
    if (typeof(this.index) == "number") {
      this.index = this.index + 1;
    }
  }

}
