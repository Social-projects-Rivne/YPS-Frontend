import { Component, OnInit, Input } from '@angular/core';
import { IJournalColumnDate } from 'src/app/models/IJournalColumnDate';
import { IJournalColumnMark } from 'src/app/models/IJournalColumnMark';

@Component({
  selector: 'yps-pupil-journal-column-list',
  templateUrl: './pupil-journal-column-list.component.html',
  styleUrls: ['./pupil-journal-column-list.component.scss']
})
export class PupilJournalColumnListComponent implements OnInit {
  @Input() journalcolumns: IJournalColumnDate[];
  constructor() { }

  ngOnInit(): void {
  }
}
