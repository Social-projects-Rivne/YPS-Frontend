import { Component, OnInit, Input } from '@angular/core';
import {IJournalColumnDate} from 'src/app/models/IJournalColumnDate';
import { IJournalColumnMark } from 'src/app/models/IJournalColumnMark';

@Component({
  selector: 'yps-pupil-journal-column-card',
  templateUrl: './pupil-journal-column-card.component.html',
  styleUrls: ['./pupil-journal-column-card.component.scss']
})
export class PupilJournalColumnCardComponent implements OnInit {
   @Input() journalcolumn: IJournalColumnDate;
   @Input() mark: IJournalColumnMark;
  constructor() { }

  ngOnInit(): void {
  }
}