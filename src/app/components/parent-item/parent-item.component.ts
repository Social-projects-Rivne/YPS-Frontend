import { Component, Input } from '@angular/core';
import { IParent } from 'src/app/models/IParent';

@Component({
  selector: 'yps-parent-item',
  templateUrl: './parent-item.component.html',
  styleUrls: ['./parent-item.component.scss']
})
export class ParentItemComponent {
  @Input() parent: IParent;
  @Input() index: number;
}
