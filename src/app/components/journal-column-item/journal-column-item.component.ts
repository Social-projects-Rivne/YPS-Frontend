import { Component, OnInit, Input } from '@angular/core';
import { IShortInfoPupil } from 'src/app/models/IShortInfoPupil';

@Component({
  selector: 'yps-journal-column-item',
  templateUrl: './journal-column-item.component.html',
  styleUrls: ['./journal-column-item.component.scss']
})
export class JournalColumnItemComponent implements OnInit {
  @Input() pupilShortInfo: IShortInfoPupil;
  @Input() index: number | string;
  marks: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "H"]

  constructor() { }

  ngOnInit(): void {
    if (typeof(this.index) == "number") {
      this.index = this.index + 1;
    }
  }
}