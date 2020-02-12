import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yps-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {

  @Input() data: any[];
  
  @Input() columns: any;
 
  columnTitles: string[];


  ngOnInit() {
    this.columnTitles = this.columns.map((value: { def: string; }) => value.def);
  }
}