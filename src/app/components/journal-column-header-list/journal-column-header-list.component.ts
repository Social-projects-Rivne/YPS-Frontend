import { Component, Input } from '@angular/core';
import { IJournalColumnHeader } from 'src/app/models/IJournalColumnHeader';

@Component({
  selector: 'yps-journal-column-header-list',
  templateUrl: './journal-column-header-list.component.html',
  styleUrls: ['./journal-column-header-list.component.scss']
})
export class JournalColumnHeaderListComponent {
  @Input() journalColumnHeaders: IJournalColumnHeader[];
}
