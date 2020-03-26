import { Component, Input } from '@angular/core';
import { IChildOfParent } from 'src/app/models/IChildOfParent';

@Component({
  selector: 'yps-children-box',
  templateUrl: './children-box.component.html',
  styleUrls: ['./children-box.component.scss']
})
export class ChildrenBoxComponent {
  @Input() children: IChildOfParent[];
  show: boolean = false;

  toggleShow = () => {
    this.show = !this.show;
  }
}
