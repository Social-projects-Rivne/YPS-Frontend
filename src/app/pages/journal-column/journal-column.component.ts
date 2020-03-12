import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yps-journal-column',
  templateUrl: './journal-column.component.html',
  styleUrls: ['./journal-column.component.scss']
})
export class JournalColumnComponent implements OnInit {
  id:string;
  classId:string;
  teacherId:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.classId = this.route.snapshot.paramMap.get('classId');
    this.teacherId = this.route.snapshot.paramMap.get('teacherId');

    console.log(this.id +" - ID les "+ this.classId + " - ID class " + this.teacherId + " - ID teacher");
  }
}
