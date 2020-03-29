import { Component, OnInit, Input } from '@angular/core';
import { IJournalColumnMark } from 'src/app/models/IJournalColumnMark';

@Component({
  selector: 'yps-pupil-journal-column-mark',
  templateUrl: './pupil-journal-column-mark.component.html',
  styleUrls: ['./pupil-journal-column-mark.component.scss']
})
export class PupilJournalColumnMarkComponent implements OnInit {
  @Input() mark: IJournalColumnMark;
  
  constructor() { }

  ngOnInit(): void {
  }

}
