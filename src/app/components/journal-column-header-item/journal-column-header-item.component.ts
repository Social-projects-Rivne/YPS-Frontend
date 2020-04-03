import { Component, Input } from '@angular/core';
import { IJournalColumnHeader } from '../../models/IJournalColumnHeader'

@Component({
  selector: 'yps-journal-column-header-item',
  templateUrl: './journal-column-header-item.component.html',
  styleUrls: ['./journal-column-header-item.component.scss']
})

export class JournalColumnHeaderItemComponent {
  @Input() journalColumn: IJournalColumnHeader;
}
