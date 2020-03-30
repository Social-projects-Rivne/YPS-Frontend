import { Component, Input } from '@angular/core';
import { IJournalColumn } from 'src/app/models/IJournalColumn';
import { IJournalColumnMark } from 'src/app/models/IJournalColumnMark';

@Component({
  selector: 'yps-pupil-journal-column-card',
  templateUrl: './pupil-journal-column-card.component.html',
  styleUrls: ['./pupil-journal-column-card.component.scss']
})
export class PupilJournalColumnCardComponent {
   @Input() journalColumn: IJournalColumn;
   @Input() mark: IJournalColumnMark;
}