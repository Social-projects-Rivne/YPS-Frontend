import { Component, Input } from '@angular/core';
import { IJournalColumn } from 'src/app/models/IJournalColumn';

@Component({
  selector: 'yps-pupil-journal-column-list',
  templateUrl: './pupil-journal-column-list.component.html',
  styleUrls: ['./pupil-journal-column-list.component.scss']
})
export class PupilJournalColumnListComponent {
  @Input() journalColumns: IJournalColumn[];
}
